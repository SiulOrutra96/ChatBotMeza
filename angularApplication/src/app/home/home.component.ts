import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PopularSearchs {
  name: string;
  searchs: number;
  clasification: string;
  
}

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],

})
export class HomeComponent {

  constructor() {
  }
  popularSearchs: PopularSearchs[]=[
    {name: "Reporte de faltas",searchs: 5,clasification:"Materias y faltas"},
    {name: "Promedio General",searchs: 5,clasification:"Información General"},
    
  ]
  displayedColumns: string[] = ['name', 'searchs', 'clasification'];
  dataSource = new MatTableDataSource<PopularSearchs>(this.popularSearchs);
}