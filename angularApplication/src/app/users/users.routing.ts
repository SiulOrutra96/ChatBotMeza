import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '', component: UsersComponent
   },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
    exports: [ RouterModule ]
})
export class UsersRoutingModule { }
