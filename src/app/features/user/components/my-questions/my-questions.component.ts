import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserStorageService } from '../../../../core/storage/user-storage.service';
import { Question } from '../../../../models/question';
import { Modules } from '../../../../shared/modules/ImportModules';

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
  
  constructor(private userService: UserService) {
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
}
