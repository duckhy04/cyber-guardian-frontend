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
  isUserLoggedIn: boolean = true;
  isAdminLoggedIn: boolean = true;
  loading: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Kiểm tra trạng thái đăng nhập khi khởi động
        this.checkLoginStatus();
  }

  checkLoginStatus() {
    setTimeout(() => {
      this.isUserLoggedIn = UserStorageService.isUserLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      this.loading = false; // Đặt loading thành false sau khi kiểm tra
    }, 1000); // Thời gian chờ
  }
}
