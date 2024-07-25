import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpURL : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:8080/addEmployee' ;
    this.getEmpURL = 'http://localhost:8080/getAllEmployees' ;  // replace with your backend API endpoint  }
   
  }

  addEmployee(emp : Employee) :Observable<Employee>{
    return this.http.post<Employee>(this.addEmpURL, emp);
  }

  getAllEmployee(): Observable<Employee[]>{
}
