import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Modules } from '../../shared/modules/ImportModules';
import { IconComponent } from "../../shared/components/icon/icon.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, Modules, IconComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  
}
