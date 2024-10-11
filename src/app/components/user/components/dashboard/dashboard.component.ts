import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Modules } from '../../../../ImportModules';
import { MaterialAngularModules } from '../../../../MaterialAngularModules';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Modules, MaterialAngularModules],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  questions: any[] = [];

  constructor(private userService: UserService,
  ){}

  ngOnInit(){
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questions = [];
    this.userService.getAllQuestions().subscribe({
      next: (response) => {
        response.forEach((element: any) => {
          this.questions.push(element);
        })
      },
    })
  }

}
