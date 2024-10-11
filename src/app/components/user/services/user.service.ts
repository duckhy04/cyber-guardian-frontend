import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../../services/storage/user-storage.service';

const URL = "http://localhost:8080/api/user/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  postQuestion(questionDto: any): Observable<any> {
    return this.httpClient.post(URL + "question", questionDto, {
      headers: this.createAuthorizationHeader()
    })
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(URL + "categories", {
      headers: this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
