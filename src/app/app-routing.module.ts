import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PotterComponent } from './potter/potter.component';

const routes: Routes = [{ path: 'potter', component: PotterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
