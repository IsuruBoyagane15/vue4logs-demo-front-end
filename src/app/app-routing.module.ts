import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditModelComponent } from './edit-model/edit-model.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'parser', component: EditModelComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
