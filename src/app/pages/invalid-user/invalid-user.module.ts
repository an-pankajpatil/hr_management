import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvalidUserPageRoutingModule } from './invalid-user-routing.module';

import { InvalidUserPage } from './invalid-user.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InvalidUserPageRoutingModule
  ],
  declarations: [InvalidUserPage]
})
export class InvalidUserPageModule {}
