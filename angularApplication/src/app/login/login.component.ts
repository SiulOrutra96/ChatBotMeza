import { Router, ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectorRef } from '@angular/core';
@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],

})
export class LoginComponent {
    constructor (
        public router: Router,
        private route: ActivatedRoute,
        private changeDetectorRef: ChangeDetectorRef
      ) {
    }

    userName: string;
    password: string;
    initBtn = true;
    hide = true;

    loginBtn() {
      if (this.userName && this.password) {
        this.initBtn = false;
      } else {
        this.initBtn = true;
      }
    }
}
