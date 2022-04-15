import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable()
export class Alert {
    loading: any;
    constructor(private alertController: AlertController) { }

    async PresentAlert(message: string) {
        const alert = this.alertController.create({
            header: 'Alerta',
            message: `${message}`,
            buttons: ['OK']
          });
          await (await alert).present();
    }
}