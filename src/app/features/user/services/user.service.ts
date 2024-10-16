import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';

const URL = "http://localhost:8080/api"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(URL + "/user/categories")
  }
}
