import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import {animate, style, transition, trigger, state} from '@angular/animations';
import { ApiService } from 'src/app/http.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { Animation, AnimationController, IonSearchbar } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { ToastService } from 'src/app/toast.service';

const { Keyboard } = Plugins;
@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.page.html',
  styleUrls: ['./admin-sign-in.page.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          height: '10px',
        })
      ),
      state(
        'out',
        style({
          height: '0px',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class AdminSignInPage implements OnInit {
  type: string;
  loginForm: FormGroup;
  registrationForm: FormGroup;
  isKeyboardOpen: boolean;
  deviceDetails = {};
  constructor(private formBuilder: FormBuilder, private animationCtrl: AnimationController, private http: ApiService,
              private dataService: DataserviceService,
              private navCtrl: NavController, private detector: ChangeDetectorRef,
              private toastService: ToastService) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.registrationForm = formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  get registrationFormControl() {
    return this.registrationForm.controls;
  }
  helpMenuOpen: string;
  // @ViewChild('autofocus', { static: false }) searchbar: IonSearchbar;

  ngOnInit() {
    this.type = 'signin';
    this.helpMenuOpen = 'in';
  }
  async loginUser(){
    if (this.loginForm.valid){
      this.deviceDetails = await this.dataService.getDeviceInfo();
      this.loginForm.controls.email.setValue(this.loginForm.value.email.toLowerCase());
      this.http.post('user/login', {...this.loginForm.value, deviceDetails: this.deviceDetails}).then(async (response: any) => {
        this.dataService.setUserInfo(response);
        this.dataService.getInitialData();
        // this.navCtrl.navigateForward(['carecircle']);
        const lastVisited = await this.dataService.getlastVisitedPage();
        this.dataService.getInitialData();
        this.navCtrl.navigateForward([lastVisited ? lastVisited : 'carecircle/showcarecircle']);
      }, (error) => {
        if (error?.msg.indexOf('not verified') === 8){
          this.dataService.setSignupData(this.loginForm.value);
          this.navCtrl.navigateForward(['otp']);
        }
      });
    }
    else{
      return;
    }
  }
  registerUser(){
    if (this.registrationForm.valid){
      this.registrationForm.controls.email.setValue(this.registrationForm.value.email.toLowerCase());
      this.http.post('user', {...this.registrationForm.value, deviceDetails: this.deviceDetails}).then((response) => {
        this.dataService.setSignupData(response);
        this.registrationForm.reset();
        this.navCtrl.navigateForward(['otp']);
        // this.type = 'signin';
      }, (error) => {
      });
    }
    else{
      this.toastService.presentToast('Please enter all the required fields!');
    }
  }
  checkValidity(control, passwordMatch= false){
    if (control.touched){
      if (control.invalid){
        return false;
      }
      else{
        if (passwordMatch){
          return this.registrationFormControl.confirmPassword.errors === null;
        }
        else{
          return true;
        }
      }
    }
    else{
        return true;
    }
  }

   ionViewWillEnter() {
    this.type = 'signin';
    this.dataService.getDeviceInfo().then(deviceDetails => {
      this.deviceDetails = deviceDetails;
      if (deviceDetails && deviceDetails.platform !== 'web'){
        Keyboard.addListener('keyboardWillShow', () => {
          this.isKeyboardOpen = true;
          this.detector.detectChanges();
        }),
        Keyboard.addListener('keyboardWillHide', () => {
          this.isKeyboardOpen = false;
          this.detector.detectChanges();
        }),
        this.isKeyboardOpen = false;
      }
    });
  }

  segmentChanged(ev: any) {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';

    if (ev.detail.value === 'signin') {
      const animation: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector('.logo-img'))
        .duration(500)
        .keyframes([
          { offset: 0, transform: 'scale(0.8) ' },
          { offset: 0.5, transform: 'scale(0.9) ' },
          { offset: 1, transform: 'scale(1)' },
        ]);
      return animation.play();
    } else if (ev.detail.value === 'signup') {
      const animation2: Animation = this.animationCtrl
        .create()
        .addElement(document.querySelector('.logo-img'))
        .duration(500)
        .keyframes([
          { offset: 0, transform: 'scale(1) ' },
          { offset: 0.5, transform: 'scale(0.9) ' },
          { offset: 1, transform: 'scale(0.8)' },
        ]);
      return animation2.play();
    }
  }
}
