import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/toast.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  name = '';
  email = '';

  constructor(private dataService: DataserviceService, formBuilder: FormBuilder, private http: ApiService, private navCtrl: NavController,
              private toastService: ToastService) {
    this.otpForm = formBuilder.group({
      otp1: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp2: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp3: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp4: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp5: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp6: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    });
  }
  otpForm: FormGroup;
  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.dataService.setLastVisitedPage('/otp');
    const userData = await this.dataService.getSignupData();
    if (userData){
      this.name = userData.userName;
      this.email = userData.email;
    }
  }
  otpController(event, next, prev){
    if (event.target.value.length < 1 && prev){
      prev.setFocus();
    }
    else if (next && event.target.value.length > 0){
      next.setFocus();
    }
    else {
     return 0;
    }
  }
  verifyOtp(){
    if (this.otpForm.valid){
      const otp = Object.keys(this.otpForm.value).map(key => this.otpForm.value[key]).join('');
      this.http.put('user/verifyUser', {email: this.email, OTP: otp}).then((response) => {
        this.dataService.setLastVisitedPage(null);
        this.toastService.presentToast('OTP Verified Successfully!', 'success');
        this.navCtrl.back();
      });
    }
    else{
      this.toastService.presentToast('Please Enter all the digits!');
    }
  }
  resendOtp(){
    this.http.post('user/resendSignUp', {email: this.email}).then((response) => {
      console.log(response);
      this.toastService.presentToast('OTP Email Sent!', 'success');
    });
  }
}
