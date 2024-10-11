import { Component } from '@angular/core';
import { Modules } from '../../../../ImportModules';
import { MaterialAngularModules } from '../../../../MaterialAngularModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserStorageService } from '../../../../services/storage/user-storage.service';

@Component({
  selector: 'app-post-question',
  standalone: true,
  imports: [Modules, MaterialAngularModules],
  templateUrl: './post-question.component.html',
  styleUrl: './post-question.component.scss'
})
export class PostQuestionComponent {

  userId!: string;
  categories: any[] = [];
  postQuestionForm!: FormGroup;

  constructor(
    private userSerivce: UserService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getCategories();
    this.userId = UserStorageService.getUserId();
    console.log(this.userId);
    this.postQuestionForm = this.formBuilder.group({
      categoryId: [null, [Validators.required]],
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });
  }

  postQuestion() {
    if (this.postQuestionForm.valid) {
      const questionData = {
        categoryId: this.postQuestionForm.value.categoryId,
        title: this.postQuestionForm.value.title,
        content: this.postQuestionForm.value.content,
        userId: this.userId,
      };

      this.userSerivce.postQuestion(questionData).subscribe({
        next: (response) => {
          this.snackBar.open("Posted category success", "Close", { duration: 5000 })
        },
        error: (error) => {
          this.snackBar.open('Post failed', 'Close', { duration: 5000, panelClass: 'error-snackbar' })
        }
      })
    } else {
      this.postQuestionForm.markAllAsTouched();
    }
  }

  getCategories() {
    this.userSerivce.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      }
    })
  }
}
