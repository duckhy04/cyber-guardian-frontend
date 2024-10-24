import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Category } from '../../../models/category';
import { Question } from '../../../models/question';
import { ErrorHandlerService } from '../../../core/errors/error-handler.service';
import { categories, myQuestion } from '../components/data';

const URL = "http://localhost:8080/api"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandlerService
  ) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(URL + "/user/categories").pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandler.handleError(error)
        return of(categories)
      })
    )
  }

  askQuestion(question: Question, userId: string, categoryId: string): Observable<Question> {
    const apiUrl = `${URL}/user/question?userId=${userId}&categoryId=${categoryId}`;
    return this.httpClient.post<Question>(apiUrl, question).pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    );
  }

  getQuestionsByUserId(userId: string): Observable<Question[]> {
    const apiUrl = `${URL}/user/user-questions?userId=${userId}`;
    return this.httpClient.get<Question[]>(apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandler.handleError(error)
        return of(myQuestion);
      })
    )
  }

  saveComment(commentDto: any, userId: string, questionId: number): Observable<any> {
    const apiUrl = `${URL}/user/comment?userId=${userId}&questionId=${questionId}`;
    return this.httpClient.post<any>(apiUrl, commentDto).pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    )
  }
}
