import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewWindowComponent } from './new-window/new-window.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'newWindow',
    component: NewWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
