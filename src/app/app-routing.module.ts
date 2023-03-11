// import { NotFoundComponent } from './components/not-found/not-found.component';
import { OpeningComponent } from './components/opening/opening.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
 import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'opening',component:OpeningComponent },
  {path:'',redirectTo:'/opening',pathMatch:'full' },
  {path:'login',component:LoginComponent},
   {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
