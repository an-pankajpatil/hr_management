import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit,OnDestroy {

  date:Date;
  interval;
  constructor() { }
  ngOnInit() {
    this.interval = setInterval(() => {
      this.date=new Date();
    }, 1000);
  }
  ngOnDestroy() {
      clearInterval(this.interval);
  }

}
