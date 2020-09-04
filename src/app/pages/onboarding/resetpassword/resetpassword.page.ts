import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { DataserviceService } from '../../dataservice.service';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/toast.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  resetPasswordForm: FormGroup;
  otpForm: FormGroup;
  email: string;
  constructor(formBuilder: FormBuilder, private dataService: DataserviceService, private http: ApiService, private navCtrl: NavController, private toastService: ToastService) {
    this.otpForm = formBuilder.group({
      otp1: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp2: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp3: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp4: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp5: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      otp6: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    });
    this.resetPasswordForm = formBuilder.group({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  async ionViewWillEnter(){
    const userData = await this.dataService.getSignupData();
    if (userData){
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
  ngOnInit() {
  }
  checkValidity(control, passwordMatch= false){
    if (control.touched){
      if (control.invalid){
        return false;
      }
      else{
        if (passwordMatch){
          return this.resetPasswordForm.controls.confirmPassword.errors === null;
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
  changePassword(){
    if (this.otpForm.valid && this.resetPasswordForm.valid){
      const otp = Object.keys(this.otpForm.value).map(key => this.otpForm.value[key]).join('');
      const requestData = {email: this.email, password: this.resetPasswordForm.controls.password.value, OTP: otp};
      this.http.put('user/updatePassword', requestData).then((response) => {
        this.dataService.setLastVisitedPage(null);
        this.navCtrl.navigateForward(['/admin-sign-in']);
      });
    }
  }
  resendOtp(){
    this.http.post('user/resendPassword', {email: this.email}).then((response) => {
      console.log(response);
      this.toastService.presentToast('OTP Email sent!', 'success');
    });
  }
}
