import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
	{path: 'find', redirectTo: 'search'}, 
	{path: 'home', component: HomeComponent},
  
  {
    path: 'about/:id',
    component: AboutComponent
  },

  {
    path: 'user/:id',
    component: UserComponent
  },

  {
    path: '**', component: UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
