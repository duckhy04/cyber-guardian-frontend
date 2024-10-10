import { Component } from '@angular/core';
import { Modules } from '../../ImportModules';
import { MaterialAngularModules } from '../../MaterialAngularModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserStorageService } from '../../services/storage/user-storage.service';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [Modules, MaterialAngularModules],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  loginForm!: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }
  ngOnInit(): void {

    UserStorageService.signOut();

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        // Kiểm tra xem phản hồi có chứa token hoặc dữ liệu người dùng hay không
        if (UserStorageService.getToken() && UserStorageService.getUser()) {
          this.snackBar.open('Login success', 'Close', { duration: 5000 });

          // Chuyển hướng dựa trên vai trò của người dùng
          if (UserStorageService.isAdminLoggedIn()) {
            this.router.navigate(['admin/dashboard']);
          } else if (UserStorageService.isUserLoggedIn()) {
            this.router.navigate(['user/dashboard']);
          }
        } else {
          // Nếu phản hồi không chứa token hoặc thông tin người dùng, coi đó là lỗi
          this.snackBar.open('Login failed: Invalid response from server', 'Close', { duration: 5000 });
        }
      },
      error: (error) => {
        // Hiển thị thông báo lỗi nếu yêu cầu thất bại
        this.snackBar.open('Login failed', 'Close', { duration: 5000 });
      }
    });
  }

}
