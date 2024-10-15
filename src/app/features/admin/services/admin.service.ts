import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../../models/category';
import { Observable } from 'rxjs';

const URL = "http://localhost:8080/api"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  addCategory(categoryDto: Category): Observable<any> {
    return this.httpClient.post(URL + "/admin/category", categoryDto)
  }
}
