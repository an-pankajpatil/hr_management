import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvalidUserPage } from './invalid-user.page';

const routes: Routes = [
  {
    path: '',
    component: InvalidUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvalidUserPageRoutingModule {}
