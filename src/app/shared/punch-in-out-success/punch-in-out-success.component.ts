import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Greet } from 'src/app/models/greet';
import { environment } from 'src/environments/environment';
import { PunchTimeResponse } from '../../models/punch-time-user';

@Component({
  selector: 'app-punch-in-out-success',
  templateUrl: './punch-in-out-success.component.html',
  styleUrls: ['./punch-in-out-success.component.scss'],
})
export class PunchInOutSuccessComponent implements OnInit {
  @Input() punchEmployeeResponse: PunchTimeResponse;
  avatarURL = environment.AVATAR_URL;
  greetMessege: string;
  Greet = Greet;
  constructor(private modalController: ModalController) {}

  greet(): void {
    const currentHour = new Date().getHours();
    const afternoon = 12;
    const evening = 17;
    if (currentHour >= afternoon && currentHour <= evening) {
      this.greetMessege = Greet.Afternoon;
    } else if (currentHour >= evening) {
      this.greetMessege = Greet.Evening;
    } else this.greetMessege = Greet.Morning;
  }

  workingHours(dt1, dt2) {
    const diffTime = new Date(dt2).getTime() - new Date(dt1).getTime();
    const hours = diffTime / (1000 * 3600);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + 'Hrs :' + rminutes + 'Min';
  }
   async closeModal() {

    await this.modalController.dismiss();
  }
  checkLateMark(punchTime) {
    let punchHours = new Date(punchTime).getHours();
    if (punchHours >= 12 && punchHours <= 14) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.greet();
  }
}
