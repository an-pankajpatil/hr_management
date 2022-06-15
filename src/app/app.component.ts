import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  intervalId: any;
  today: Date;

  constructor() {}

  ngOnInit() {
    this.currentDateTime();
  }
  
  currentDateTime() {
    this.intervalId = setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
