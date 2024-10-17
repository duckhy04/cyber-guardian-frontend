import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Modules } from '../../shared/modules/ImportModules';
import { MaterialAngularModules } from '../../shared/modules/MaterialAngularModules';
import { Components } from '../../shared/components/ImportComponents';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, Modules, MaterialAngularModules, Components],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
}
