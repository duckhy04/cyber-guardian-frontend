import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserStorageService } from '../../../../core/storage/user-storage.service';
import { Question } from '../../../../models/question';
import { Modules } from '../../../../shared/modules/ImportModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListQuestionComponent } from "../../../../shared/components/list-question/list-question.component";
import { CommentFormComponent } from "../../../../shared/components/comment-form/comment-form.component";
import { CommentService } from '../../../../services/comment/comment.service';

@Component({
  selector: 'app-my-questions',
  standalone: true,
  imports: [Modules, ListQuestionComponent, CommentFormComponent],
  templateUrl: './my-questions.component.html',
  styleUrl: './my-questions.component.scss'
})
export class MyQuestionsComponent {

  userId!: string;
  listMyQuestions!: Question[];

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
}
