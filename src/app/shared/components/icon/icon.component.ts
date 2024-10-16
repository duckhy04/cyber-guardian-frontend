import { Component, Input } from '@angular/core';
import { Modules } from '../../modules/ImportModules';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [Modules],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconName!: string;
}
