import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
    providedIn: 'root'
})
export class ToastService{
    constructor( private toastController: ToastController){}

    async presentToast(message, type= 'danger') {
        const toast = await this.toastController.create({
          message,
          color: type,
          duration: 3000
        });
        toast.present();
    }
}
