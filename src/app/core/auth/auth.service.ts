import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';
import { SignInRequest } from '../models/sign-in-request';
import { SignUpRequest } from '../models/sign-up-request';

const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private userStorageService: UserStorageService) { }

  // Hàm đăng ký (register)
  register(signupRequest: SignUpRequest): Observable<any> {
    return this.http.post(BASIC_URL + 'sign-up', signupRequest);
  }

  // Hàm đăng nhập (login)
  login(loginRequest: SignInRequest): Observable<boolean> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(BASIC_URL + 'authenticate', loginRequest, { headers, observe: 'response' }).pipe(
      map((res: any) => {
        // Lấy token từ headers
        const authorizationHeader = res.headers.get('authorization');
        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
          const token = authorizationHeader.substring(7); // Cắt chuỗi 'Bearer '
          const user = res.body;
          // Kiểm tra token và user có tồn tại không
          if (token && user) {
            this.userStorageService.saveToken(token);
            this.userStorageService.saveUser(user);
            return true;
          }
        }
        // Nếu không có token hoặc user, trả về false
        return false;
      }),
      catchError((error) => {
        console.error('Lỗi trong quá trình đăng nhập:', error);
        return of(false); // Trả về false khi có lỗi
      })
    );
  }
}
