import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserStorageService } from '../../../../core/storage/user-storage.service';
import { Question } from '../../../../models/question';
import { Modules } from '../../../../shared/modules/ImportModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-questions',
  standalone: true,
  imports: [Modules],
  templateUrl: './my-questions.component.html',
  styleUrl: './my-questions.component.scss'
})
export class MyQuestionsComponent {

  userId!: string;
  listMyQuestions!: Question[];
  formComment!: FormGroup;
  selectedFile!: File;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userId = UserStorageService.getUserId();
    this.formComment = this.fb.group({
      text: [null, Validators.required]
    })
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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  postComment(questionId: number){
    if (this.formComment.valid){
      const formData = new FormData();
      formData.append('image', this.selectedFile)
      formData.append('text', this.formComment.get('text')?.value)

      this.userService.saveComment(formData, this.userId, questionId).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log("Error123")
        }
      })
    }
  }
}
