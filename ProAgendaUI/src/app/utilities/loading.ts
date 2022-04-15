import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable()
export class Loading {
    loading: any;
    constructor(private loadingController: LoadingController) { }

    PresentLoading() {
        this.loading = this.loadingController.create({
            cssClass: 'loading-class',
            message: 'Por favor, espere...',
          });
          return  this.loading;
          this.loadingController.dismiss();
    }
    DismissLoading() {
        this.loadingController.dismiss();
    }
}

