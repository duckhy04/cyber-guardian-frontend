import { Component, Input } from '@angular/core';
import { Modules } from '../../modules/ImportModules';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [Modules],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {
  @Input() comments: Comment[] = [];
}
