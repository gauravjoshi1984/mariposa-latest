import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import {animate, style, transition, trigger, state} from '@angular/animations';
import { ApiService } from 'src/app/http.service';
import { DataserviceService } from '../../dataservice.service';
import { NavController } from '@ionic/angular';
import { Animation, AnimationController, IonSearchbar } from '@ionic/angular';
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
  constructor(private formBuilder: FormBuilder, private animationCtrl: AnimationController, private http: ApiService,
              private dataService: DataserviceService,
              private navCtrl: NavController) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.registrationForm = formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required]),
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
  @ViewChild('autofocus', { static: false }) searchbar: IonSearchbar;

  ngOnInit() {
    this.type = 'signin';
    this.helpMenuOpen = 'in';
  }
  loginUser(){
    if (this.loginForm.valid){
      this.http.post('login', this.loginForm.value).then((response: any) => {
        this.dataService.setUserInfo(response);
        this.navCtrl.navigateForward(['carecircle/showcarecircle']);
      }, (error) => {
        console.log(error);
      });
    }
    else{
      return;
    }
  }
  registerUser(){
    if (this.registrationForm.valid){
      this.http.post('user', this.registrationForm.value).then((response) => {
        this.type = 'signin';
      }, (error) => {
        console.log(error);
      });
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

  //  ionViewWillEnter() {
  //  setTimeout(() => this.searchbar.setFocus(), 300);
  // }

  segmentChanged(ev: any) {
    // console.log("Segment changed", ev);
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
