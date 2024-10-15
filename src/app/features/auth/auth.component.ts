import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Modules } from '../../shared/modules/ImportModules';
import { UserStorageService } from '../../core/storage/user-storage.service';
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, Modules, SpinnerComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  ngOnInit() {
    UserStorageService.signOut();
  }
}
