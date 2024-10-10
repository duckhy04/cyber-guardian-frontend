import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialAngularModules } from '../../MaterialAngularModules';
import { Modules } from '../../ImportModules';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, MaterialAngularModules, Modules],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
