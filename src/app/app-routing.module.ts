import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-screen',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'main-screen',
    loadChildren: () =>
      import('./pages/main-screen/main-screen.module').then(
        (m) => m.MainScreenPageModule
      ),
  },
  {
    path: 'invalid-user',
    loadChildren: () =>
      import('./pages/invalid-user/invalid-user.module').then(
        (m) => m.InvalidUserPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
