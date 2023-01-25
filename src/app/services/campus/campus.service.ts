import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { Campus } from 'src/app/models/campus/campus';
@Injectable({
  providedIn: 'root'
})
export class CampusService {

  private baseUrl: string = environment.baseUrl + 'Campus';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Campus[]> {
    return this.http.get<Campus[]>(this.baseUrl+"/");
  }

  getAllPage(page:any,itempage:any): Observable<Campus[]> {
    return this.http.get<Campus[]>(this.baseUrl+"/?page="+page+"&&size="+itempage);
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
