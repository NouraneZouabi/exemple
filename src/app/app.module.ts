import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlatComponent } from './plat/plat.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


@NgModule({  
  declarations: [
    AppComponent,
    PlatComponent,
    LoginComponent,
    AddComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule , FormsModule,ReactiveFormsModule,HttpClientModule,MatToolbarModule,
    AppRoutingModule, RouterModule, 
    AppRoutingModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
