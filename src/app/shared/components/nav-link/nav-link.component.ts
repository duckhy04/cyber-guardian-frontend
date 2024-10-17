import { Component, Input } from '@angular/core';
import { Modules } from '../../modules/ImportModules';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [Modules, IconComponent],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss'
})
export class NavLinkComponent {
  @Input() routerLink!: string;
  @Input() label!: string;
  @Input() iconName!: string;
}
