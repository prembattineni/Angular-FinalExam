import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

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
