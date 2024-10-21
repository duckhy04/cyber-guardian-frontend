import { Component, Input } from '@angular/core';
import { Question } from '../../../models/question';
import { Modules } from '../../modules/ImportModules';

@Component({
  selector: 'app-list-question',
  standalone: true,
  imports: [Modules],
  templateUrl: './list-question.component.html',
  styleUrl: './list-question.component.scss'
})
export class ListQuestionComponent {
  @Input() question!: Question;
}
