import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: any = 'assets/employees.json'

  constructor(private http:HttpClient) {

  }



  getEmployeesInfo(){
    return this.http.get(this.url)
}


}
