import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NFC } from '@awesome-cordova-plugins/nfc/ngx';
import { MenuController, ModalController } from '@ionic/angular';
import { PunchTimeResponse } from '../models/punch-time-user';
import { ValidationResponse } from '../models/validation-response';
import { ValidateAndPunchService } from '../services/validate-and-punch.service';
import { PunchInOutSuccessComponent } from '../shared/punch-in-out-success/punch-in-out-success.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  nfcStatus: string;
  timeOut: any;
  constructor(
    private nfc: NFC,
    private router: Router,
    private menuCtrl: MenuController,
    private service: ValidateAndPunchService,
    private modalController: ModalController
  ) { 
    setTimeout(() => {
      router.navigateByUrl('/main-screen')
    }, 1000*60*60);
  }

  convertByteArrayToString(byteArray) {
    let bytesView = new Uint8Array(byteArray);
    let decodedString = new TextDecoder().decode(bytesView);
    return decodedString.slice(3);
  }
  ionViewDidEnter(): void {
    this.menuCtrl.enable(true);
    this.checkNfcStatus();
  }

  async openIonModal(punchEmployeeResponse: PunchTimeResponse) {
    clearTimeout(this.timeOut);
    await this.closeModal();
    const modal = await this.modalController.create({
      component: PunchInOutSuccessComponent,
      cssClass: 'modal',
      id: 'punch-in-modal',
      componentProps: {
        punchEmployeeResponse,
      },
    });
    return await modal.present().then(() => {
      this.timeOut = setTimeout(async () => {
        await this.closeModal();
      }, 5000);
    });
  }
  async closeModal() {
    try {
      await this.modalController.dismiss('punch-in-modal');
    } catch (err) {
      console.log(err);
    }
  }
  checkNfcStatus(): void {
    this.nfc
      .enabled()
      .then((sucessStatus: string) => {
        this.nfcStatus = sucessStatus;
        this.registerNfcListner();
      })
      .catch((errorStatus: string) => {
        this.nfcStatus = errorStatus;
        if (errorStatus === 'NFC_DISABLED') {
          this.nfc.showSettings();
        } else if (errorStatus === 'NO_NFC') {
          //show page with No NFC
        }
      });
  }
  registerNfcListner() {
    this.nfc
      .addNdefListener(
        (success) => {
          console.log('Success :', success);
        },
        (error) => {
          console.log('Error :', error);
        }
      )
      .subscribe((event) => {
        this.service
          .validateEmployee(
            this.convertByteArrayToString(event.tag.ndefMessage[0].payload)
          )
          .subscribe((response: ValidationResponse) => {
            console.log(response);
            if (response.data.status === 200) {
              console.log('OK:', response);
              this.service
                .punchEmployee(this.nfc.bytesToHexString(event.tag.id))
                .subscribe(async (punchResponse: PunchTimeResponse) => {
                  console.log(punchResponse);
                  await this.openIonModal(punchResponse);
                });
            } else {
              this.router.navigateByUrl('/invalid-user');
            }
          });
      });
  }
  ngOnDestroy(): void {
    this.menuCtrl.enable(false);
  }
}
