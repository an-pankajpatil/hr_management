import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PunchInOutSuccessComponent } from './punch-in-out-success/punch-in-out-success.component';

@NgModule({
  declarations: [HeaderComponent, PunchInOutSuccessComponent, WeatherComponent],
  imports: [CommonModule, IonicModule],

  exports: [HeaderComponent, PunchInOutSuccessComponent, WeatherComponent],
})
export class SharedModule {}
