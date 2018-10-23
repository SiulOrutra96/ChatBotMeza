import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    // path: 'user', loadChildren: './user/user.module#UserModule'
    { path: 'home', loadChildren: './home/home.module#HomeModule'},
    { path: 'users', loadChildren: './users/users.module#UsersModule'},
    { path: 'edit', loadChildren: './edit/edit.module#EditModule'},
    { path: 'mail', loadChildren: './mail/mail.module#MailModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
      ],
    exports: [ RouterModule ],

})
export class AppRoutingModule { }
