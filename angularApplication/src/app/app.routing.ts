import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '', component: LoginComponent // loadChildren: './welcome/welcome.module#WelcomeModule' //
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
      ],
    exports: [ RouterModule ],

})
export class AppRoutingModule { }
