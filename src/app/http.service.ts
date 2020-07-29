import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

// const urlPrefix = 'http://localhost:8080/';
const urlPrefix = 'http://mariposa-dev-elb-1389153451.us-east-1.elb.amazonaws.com/';

@Injectable({
    providedIn: 'root'
  })
export class ApiService{
    token: string;
    loading;
    constructor(private http: HttpClient, private loadingController: LoadingController, private toastController: ToastController){
    }
    private async presentLoading() {
        return await this.loadingController.create({
            cssClass: 'custom-class',
            message: 'Please wait...',
        });
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
            this.presentToast(error.error.msg);
            return error.error;
        }
    }
    get(route, params){
        return new Promise(async (resolve, reject) => {
            const URL = urlPrefix + route;
            const loading = await this.presentLoading();
            loading.present();
            this.http.get(URL, {params}).subscribe((response: Response) => {
                loading.dismiss();
                resolve(response);
            }, error => {
                loading.dismiss();
                reject(this.httpErrorHandler(error));
            });
        });
    }
    post(route, params){
        this.presentLoading();
        return new Promise(async (resolve, reject) => {
            const URL = urlPrefix + route;
            const loading = await this.presentLoading();
            loading.present();
            this.http.post(URL, params).subscribe((response: any) => {
                loading.dismiss();
                resolve(response);
            }, error => {
                loading.dismiss();
                reject(this.httpErrorHandler(error));
            });
        });
    }
}
