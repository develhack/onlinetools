import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'translation',
    pathMatch: 'full'
  },
  {
    path: 'translation',
    loadChildren: '@page/translation/translation.module#TranslationPageModule'
  },
  {
    path: 'calculation',
    loadChildren: '@page/calculation/calculation.module#CalculationPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
