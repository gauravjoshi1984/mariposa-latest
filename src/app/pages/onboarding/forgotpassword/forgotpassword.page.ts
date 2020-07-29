import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/http.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  forgotPasswordForm: FormGroup;
  resetResult = false;
  constructor(formBuilder: FormBuilder, private http: ApiService, private navCtrl: NavController) {
    this.forgotPasswordForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  get forgotPasswordFormControl() {
    return this.forgotPasswordForm.controls;
  }
  ngOnInit() {
  }
  checkValidity(control){
    if (control.touched){
      if (control.invalid){
        return false;
      }
      else{
        return true;
      }
    }
    else{
      return true;
    }
  }
  forgotPassword(){
    if (this.forgotPasswordForm.valid){
      this.http.post('/forgotPassword', this.forgotPasswordForm.value).then((response) => {
        this.navCtrl.navigateForward(['forgotpasswordcompleted']);
        console.log(response);
      }, err => {
        console.log(err);
      });
    }
  }
}
