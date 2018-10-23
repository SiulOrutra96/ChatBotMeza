import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing';
import { StartModule } from '../_start/start.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatSnackBarModule,
  MatSnackBar,
  MatTableModule,
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
    declarations: [
        HomeComponent,

    ],
    imports: [
        StartModule, HomeRoutingModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
    MatDialogModule,
    ],
    entryComponents: [],
    providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
    ],
    exports: [
    ]
})
export class HomeModule { }
