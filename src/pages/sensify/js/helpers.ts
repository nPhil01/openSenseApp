import { ToastController, Toast } from 'ionic-angular';
import { Injectable } from "@angular/core";

@Injectable()
export class helpers {

    public toastMSG: Toast;

    constructor(
        private toastCtrl: ToastController) {
    }

    presentToast(text: string): void {
        let toastData = {
            message: text,
            duration: 500000,
            position: 'top',
            dismissOnPageChange: true
        }
        this.showToast(toastData);
    }

    presentClosableToast(text: string): void {
        let toastData = {
            message: text,
            showCloseButton: true,
            closeButtonText: 'X',
            position: 'top',
            dismissOnPageChange: true
        };
        this.showToast(toastData);
    }

    private showToast(data: any): void {
        this.toastMSG ? this.toastMSG.dismiss() : false;
        this.toastMSG = this.toastCtrl.create(data);
        this.toastMSG.present();
    }
}