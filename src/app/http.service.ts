import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserAuthService } from './pages/onboarding/user-auth.service';

// const urlPrefix = 'http://localhost:8080/';
const urlPrefix = 'https://lywob7s34m.execute-api.us-east-1.amazonaws.com/dev1/';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    token: string;
    loading;
    constructor(private http: HttpClient, private loadingController: LoadingController, private toastController: ToastController,
                private navCtrl: NavController,
                private authService: UserAuthService){
    }
    private async presentLoading() {
        return await this.loadingController.create({
            cssClass: 'custom-class',
            message: 'Please wait...',
        });
    }
    private async getHeaders(){
        const authTokens = await this.authService.getAuthTokens();
        let headers = new HttpHeaders();
        if (authTokens){
            // headers = headers.append('Content-Type', 'application/json');
            headers = headers.append('accessToken', authTokens.accessToken);
            headers = headers.append('refreshToken', authTokens.refreshToken);
        }
        return headers;
    }
    private setHeaders(data){
        if (data && data.keys().indexOf('mariposa-auth-status') >= 0 && data.get('mariposa-auth-status') === 'Updated'){
            const headers = {accessToken: data.get('newaccesstoken'), refreshToken: data.get('newrefreshtoken')};
            this.authService.setAuthTokens(headers);
        }
    }
    private async presentToast(message) {
        const toast = await this.toastController.create({
          message,
          color: 'danger',
          duration: 3000
        });
        toast.present();
    }
    private httpErrorHandler(error) {
        if (error.status === 0 || error.status === 500) {
            const msg = 'Error comunicating to server! Please check your connectivity!!';
            this.presentToast(msg);
            return { msg };
        } else {
            // console.log(error.headers.keys());
            // if (error.status === 401 && (error.headers.get('mariposa-auth-status') === 'Denied' || error.headers.get('mariposa-auth-status') === 'Re-Login')){
            if (error.status === 401 || error.status === 403){
                this.authService.setUserInfo(null);
                if (error.error){
                    this.presentToast(error.error.msg);
                    return error.error;
                }
                else{
                    this.presentToast('Please login again!!');
                    this.navCtrl.navigateRoot('/admin-sign-in');
                }
            }
            else if (error.error){
                this.presentToast(error.error.msg);
                return error.error;
            }
            else{
                this.presentToast('Some error occured!!');
            }
        }
    }
    get(route, params, loader= true){
        return new Promise(async (resolve, reject) => {
            const headers = await this.getHeaders();
            const URL = urlPrefix + route;
            let loading;
            if (loader){
                loading = await this.presentLoading();
                loading.present();
            }
            this.http.get(URL, {params, observe: 'response', headers}).subscribe((response: any) => {
                this.setHeaders(response.headers);
                if (loader){
                    loading.dismiss();
                }
                resolve(response.body);
            }, error => {
                if (loader){
                    loading.dismiss();
                }
                this.httpErrorHandler(error);
            });
        });
    }
    getCountries(){
        return new Promise(async (resolve, reject) => {
            const URL = 'https://restcountries.eu/rest/v2/all?fields=name;region';
            const loading = await this.presentLoading();
            loading.present();
            this.http.get(URL).subscribe((response: any) => {
                loading.dismiss();
                resolve(response);
            }, error => {
                loading.dismiss();
                this.httpErrorHandler(error);
            });
        });
    }
    post(route, params){
        return new Promise(async (resolve, reject) => {
            const headers = await this.getHeaders();
            const URL = urlPrefix + route;
            const loading = await this.presentLoading();
            loading.present();
            this.http.post(URL, params, {observe: 'response', headers}).subscribe((response: any) => {
                this.setHeaders(response.headers);
                loading.dismiss();
                resolve(response.body);
            }, error => {
                // error.headers.keys().map( (key) => console.log(`${key}: ${error.headers.get(key)}`));
                loading.dismiss();
                reject(this.httpErrorHandler(error));
            });
        });
    }
    delete(route, params){
        return new Promise(async (resolve, reject) => {
            const headers = await this.getHeaders();
            const URL = urlPrefix + route;
            const loading = await this.presentLoading();
            loading.present();
            this.http.delete(URL, {params, observe: 'response', headers}).subscribe((response: any) => {
                loading.dismiss();
                resolve(response.body);
            }, error => {
                loading.dismiss();
                this.httpErrorHandler(error);
            });
        });
    }
    put(route, params){
        return new Promise(async (resolve, reject) => {
            const headers = await this.getHeaders();
            const URL = urlPrefix + route;
            const loading = await this.presentLoading();
            loading.present();
            this.http.put(URL, params, {observe: 'response', headers}).subscribe((response: any) => {
                this.setHeaders(response.headers);
                loading.dismiss();
                resolve(response.body);
            }, error => {
                loading.dismiss();
                this.httpErrorHandler(error);
            });
        });
    }
}
