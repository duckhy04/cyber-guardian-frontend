import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Category } from '../../../models/category';
import { Question } from '../../../models/question';
import { ErrorHandlerService } from '../../../core/errors/error-handler.service';

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
    // return this.httpClient.get<Category[]>(URL + "/user/categories")
    const mockCategories: Category[] = [
      { id: 1, name: 'Technology', description: 'All about the latest tech trends All about the latest tech trends' },
      { id: 2, name: 'Health', description: 'Health tips and wellness advice' },
      { id: 3, name: 'Finance', description: 'Financial tips and news' },
      { id: 4, name: 'Education', description: 'Learning resources and tips' },
      { id: 5, name: 'Entertainment', description: 'Movies, music, and more' }
    ];
    return of(mockCategories);
  }

  askQuestion(question: Question, userId: string, categoryId: string): Observable<Question> {
    const apiUrl = `${URL}/user/question?userId=${userId}&categoryId=${categoryId}`;
    return this.httpClient.post<Question>(apiUrl, question).pipe(
      catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    );
  }

  getQuestionsByUserId(userId: string): Observable<Question[]> {
    // const apiUrl = `${URL}/user/user-questions?userId=${userId}`;
    // return this.httpClient.get<Question[]>(apiUrl).pipe(
    //   catchError((error: HttpErrorResponse) => this.errorHandler.handleError(error))
    // )
    const mockMyQuestions: Question[] = [{
      id: 7,
      title: "question1",
      content: "question1",
      userName: "user2",
      categoryName: "Category2",
      questionStatus: "OPEN",
      viewsCount: 0,
      createdAt: "2024-10-18T22:38:16",
      updatedAt: null
    }];
    return of(mockMyQuestions)
  }
}
