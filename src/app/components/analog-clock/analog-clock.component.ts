import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss'],
})
export class AnalogClockComponent implements OnInit, OnDestroy {
  
  timeUnits = {
    second: 0,
    hour: 0,
    minute: 0,
    hourRotation: 0,
    minuteRotation: 0,
    secondRotation: 0,
  };

  interval: any;
  day: Date;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.day = new Date();
      this.timeUnits.hour = this.day.getHours();
      this.timeUnits.minute = this.day.getMinutes();
      this.timeUnits.second = this.day.getSeconds();

      this.timeUnits.hourRotation =
        30 * this.timeUnits.hour + this.timeUnits.minute / 2;
      this.timeUnits.minuteRotation = 6 * this.timeUnits.minute;
      this.timeUnits.secondRotation = 6 * this.timeUnits.second;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
