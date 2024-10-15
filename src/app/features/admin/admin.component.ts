import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialAngularModules } from '../../shared/modules/MaterialAngularModules';
import { UserStorageService } from '../../core/storage/user-storage.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, MaterialAngularModules],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  constructor(private router: Router) {

  }

  logOut() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }

}
