import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlatComponent } from './plat/plat.component';
import { AddComponent } from './add/add.component';


const routes: Routes =[
  {path: "login", component: LoginComponent},
  {path : "", redirectTo:"login", pathMatch:"full"},
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "plat", component: PlatComponent},
  {path: "add", component: AddComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
