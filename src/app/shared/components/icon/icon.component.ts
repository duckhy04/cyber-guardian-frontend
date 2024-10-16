import { Component, Input } from '@angular/core';
import { Modules } from '../../modules/ImportModules';
import { MaterialAngularModules } from '../../modules/MaterialAngularModules';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [Modules, MaterialAngularModules],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconName!: string;
}
