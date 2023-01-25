import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Students } from 'src/app/models/students/students';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl: string = environment.baseUrl +'Boats';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Students[]> {
    return this.http.get<Students[]>(this.baseUrl+"/findAllBoats");
  }

  getAllPage(page:any,itempage:any): Observable<Students[]> {
    return this.http.get<Students[]>(this.baseUrl+"/findAllBoats?page="+page+"&&size="+itempage);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/findBoatsById/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl+"/insertBoats", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateBoats`, data);
}}
