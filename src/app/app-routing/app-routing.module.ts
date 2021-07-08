import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../employees1/employees.component';
import { Employees2Component } from '../employees2/employees2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'employee1',component:EmployeesComponent},
  {path:'employee2',component:Employees2Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
