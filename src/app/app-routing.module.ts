import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditModelComponent } from './edit-model/edit-model.component';

const routes: Routes = [
  { path: 'parser', component: EditModelComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
