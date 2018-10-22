import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],

})
export class LoginComponent {
    constructor (
        public dialog: MatDialog,
        public router: Router,
        private route: ActivatedRoute,
        private changeDetectorRef: ChangeDetectorRef
      ) {
    }

    toogleMenu() {

  }
}
