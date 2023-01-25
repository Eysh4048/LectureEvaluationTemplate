import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { School } from 'src/app/models/school/school';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl: string = environment.baseUrl + 'School';
  constructor(private http: HttpClient) { }

  getAll(): Observable<School[]> {
    return this.http.get<School[]>(this.baseUrl+"/");
  }

  getAllPage(page:any,itempage:any): Observable<School[]> {
    return this.http.get<School[]>(this.baseUrl+"/?page="+page+"&&size="+itempage);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl+"/", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/`, data);
  }

}
