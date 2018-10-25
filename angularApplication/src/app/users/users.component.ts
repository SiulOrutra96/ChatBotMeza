import { Component} from '@angular/core';
import { Students } from '../_start/models/student';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users-component',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],

})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'grade','calification'];
  students: Students[]=[
    {id:1,name:"Fer",lastName:"Reyes",grade:"5A",calification:10},
    {id:1,name:"Fer",lastName:"Reyes",grade:"5A",calification:10},
    {id:1,name:"Fer",lastName:"Reyes",grade:"5A",calification:10},
    {id:1,name:"Fer",lastName:"Reyes",grade:"5A",calification:10},
    {id:1,name:"Fer",lastName:"Reyes",grade:"5A",calification:10},
    
  ]
  dataSource = new MatTableDataSource<Students>(this.students);

  constructor() {
  }
  addUser(){
    console.log("Tu eres igual o mas lista")
  }
}
