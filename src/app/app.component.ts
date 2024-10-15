import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialAngularModules } from './shared/modules/MaterialAngularModules';
import { Modules } from './shared/modules/ImportModules';
import { UserStorageService } from './core/storage/user-storage.service';
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialAngularModules, Modules, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cyber-guardian-frontend';
}
