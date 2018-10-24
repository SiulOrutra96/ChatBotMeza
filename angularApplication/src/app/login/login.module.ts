import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing';
import { StartModule } from '../_start/start.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent

    ],
    imports: [
        StartModule, LoginRoutingModule
    ],
    providers: [

    ],
    exports: [

    ]
})
export class LoginModule { }
