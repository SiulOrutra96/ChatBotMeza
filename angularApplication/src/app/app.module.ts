import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { StartModule } from './_start/start.module';
import { LoginModule} from './login/login.module';
import { RouterModule, Router } from '../../node_modules/@angular/router';
import { AppRoutingModule } from './app.routing';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StartModule,
    LoginModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatTableModule,
    MatCheckboxModule,
    MatIconModule, CdkTableModule, CommonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
