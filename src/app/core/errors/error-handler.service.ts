import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Lỗi phía client hoặc lỗi mạng
      console.error('An error occurred:', error.error.message);
    } else {
      // Lỗi phía server
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // Trả về một observable với thông báo lỗi thân thiện cho người dùng
    return throwError('Something bad happened; please try again later.');
  }
}
