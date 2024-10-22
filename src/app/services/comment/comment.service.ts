import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from '../../core/errors/error-handler.service';
import { catchError, Observable } from 'rxjs';
import { Comment } from '../../models/comment';

const URL = "http://localhost:8080/api/user"

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) { }

  saveComment(commentDto: any, questionId: number, userId: string): Observable<any> {
    const apiUrl = `${URL}/comment?userId=${userId}&questionId=${questionId}`;
    return this.httpClient.post(apiUrl, commentDto).pipe(
      catchError((error) => this.errorHandler.handleError(error))
    )
  }

  getAllCommentsByQuestionId(questionId: number): Observable<Comment[]> {
    const apiUrl = `${URL}/comment?questionId=${questionId}`
    return this.httpClient.get<Comment[]>(apiUrl).pipe(
      catchError((error) => this.errorHandler.handleError(error))
    )
  }
}
