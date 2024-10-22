import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserStorageService } from '../../../../core/storage/user-storage.service';
import { Question } from '../../../../models/question';
import { Modules } from '../../../../shared/modules/ImportModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListQuestionComponent } from "../../../../shared/components/list-question/list-question.component";
import { CommentFormComponent } from "../../../../shared/components/comment-form/comment-form.component";
import { CommentService } from '../../../../services/comment/comment.service';
import { CommentListComponent } from "../../../../shared/components/comment-list/comment-list.component";
import { Comment } from '../../../../models/comment';

@Component({
  selector: 'app-my-questions',
  standalone: true,
  imports: [Modules, ListQuestionComponent, CommentFormComponent, CommentListComponent],
  templateUrl: './my-questions.component.html',
  styleUrl: './my-questions.component.scss'
})
export class MyQuestionsComponent {

  userId!: string;
  listMyQuestions!: Question[];
  comments: { [questionId: number]: Comment[] } = {};
  showingComments: { [questionId: number]: boolean } = {};

  constructor(private userService: UserService, private fb: FormBuilder, private commentService: CommentService) {
    this.userId = UserStorageService.getUserId();
  }

  ngOnInit() {
    this.myQuestion();
  }

  myQuestion() {
    this.userService.getQuestionsByUserId(this.userId).subscribe({
      next: (response) => {
        this.listMyQuestions = response;
      },
      error: (error) => {
        console.log("Error fetching my questions");
      }
    })
  }

  postComment(questionId: number, text: string, imageFile?: File) {
    const formData = new FormData();
    text != null && formData.append('text', text);
    imageFile && formData.append('image', imageFile);

    this.commentService.saveComment(formData, questionId, this.userId).subscribe({
      next: (response) => {
        console.log("Success")
        console.log(response)
      },
      error: (error) => {
        console.log("Error")
      }
    })
  }

  getCommentsByQuestionId(questionId: number) {
    // Kiểm tra nếu bình luận đã được tải trước đó
    if (this.comments[questionId]) {
      // Nếu đã tải, chỉ cần toggle trạng thái hiển thị
      this.showingComments[questionId] = !this.showingComments[questionId];
      return;
    }

    // Nếu chưa tải, gọi API để lấy bình luận
    this.commentService.getAllCommentsByQuestionId(questionId).subscribe({
      next: (response) => {
        this.comments[questionId] = response.map((comment: Comment) => {
          comment.processedImg = 'data:image/jpeg;base64,' + comment.byteImage;
          return comment;
        });
        this.showingComments[questionId] = true; // Hiển thị bình luận sau khi tải xong
      },
      error: (error) => {
        console.log("Error fetching comment");
      }
    });
  }
}
