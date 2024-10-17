import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Modules } from '../../../../shared/modules/ImportModules';
import { UserStorageService } from '../../../../core/storage/user-storage.service';
import { Category } from '../../../../models/category';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [Modules],
  templateUrl: './ask-question.component.html',
  styleUrl: './ask-question.component.scss'
})
export class AskQuestionComponent {

  askQuestionForm!: FormGroup;
  listCategories: Category[] = [];
  userId!: string;
  categoryId!: string;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ){
    this.askQuestionForm = this.fb.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      categoryId: [null, Validators.required]
    });
    this.userId = UserStorageService.getUserId();
  }

  ngOnInit(){
    this.getAllCategories();
  }

  askQuestion(){
    if (this.askQuestionForm.valid) {
      this.categoryId = this.askQuestionForm.get('categoryId')!.value;
      this.userService.askQuestion(this.askQuestionForm.value, this.userId, this.categoryId).subscribe({
        next: (response) => {
          console.log("Success");
        },
        error: (error) => {
          console.log("Error")
        }
      })
      console.log('Form data:', this.askQuestionForm.value);
      this.askQuestionForm.reset();
    }else {
      this.askQuestionForm.markAsUntouched();
    }
  }

  getAllCategories() {
    this.userService.getAllCategories().subscribe({
      next: (response) => {
        this.listCategories = response
      },
      error: (error) => {
        console.error("Error fetching categories:", error);
      }
    });
  }

}
