import { Component, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html',
  styleUrls: ['nav.scss']
})
export class NavComponent implements OnInit{
    sideNavOpened = false;
    sideNavSize = '100px';
    title: string;
    userName = 'Ricardo';

    constructor(
        public dialog: MatDialog,
        public router: Router,
        private route: ActivatedRoute,
        private changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
    }
}
