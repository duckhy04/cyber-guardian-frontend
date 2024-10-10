import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialAngularModules } from '../../MaterialAngularModules';
import { Modules } from '../../ImportModules';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, MaterialAngularModules, Modules],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
