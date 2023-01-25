
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Programs } from 'src/app/models/programs/programs';
@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private baseUrl: string = environment.baseUrl +'Boats';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Programs[]> {
    return this.http.get<Programs[]>(this.baseUrl+"/findAllBoats");
  }

  getAllPage(page:any,itempage:any): Observable<Programs[]> {
    return this.http.get<Programs[]>(this.baseUrl+"/findAllBoats?page="+page+"&&size="+itempage);
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
