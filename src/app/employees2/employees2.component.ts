import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees2',
  templateUrl: './employees2.component.html',
  styleUrls: ['./employees2.component.css']
})
export class Employees2Component implements OnInit {

  employees:any=[];
  errMsg:any='';
  filteredString:string='';
  sort:any='1';
  ngOnInit(): void {
  }
  constructor(private employeeService:EmployeeService) {
    employeeService.getEmployeesInfo().subscribe(
      result =>this.employees =result,
      error =>this.errMsg=error)

    
  }

}
