import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Modules } from '../../shared/modules/ImportModules';
import { UserStorageService } from '../../core/storage/user-storage.service';
import { Components } from '../../shared/components/ImportComponents';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, Modules, Components],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  ngOnInit() {
    UserStorageService.signOut();
  }
}
