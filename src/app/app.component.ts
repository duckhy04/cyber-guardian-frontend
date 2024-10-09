import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialAngularModules } from './MaterialAngularModules';
import { Modules } from './ImportModules';
import { UserStorageService } from './services/storage/user-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialAngularModules, Modules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cyber-guardian-frontend';
  isUserLoggedIn: boolean = UserStorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.isUserLoggedIn = UserStorageService.isUserLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
    })
  }
  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
