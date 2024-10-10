import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../../services/storage/user-storage.service';

const URL = "http://localhost:8080/api/admin/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  createCategory(categoryDto: any): Observable<any> {
    return this.httpClient.post(URL + "category", categoryDto, {
      headers: this.createAuthorizationHeader()
    })
  }

  getAllCategories(): Observable<any>{
    return this.httpClient.get(URL + 'categories', {
      headers: this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
