import { Component } from '@angular/core';
import { Modules } from '../../../ImportModules';
import { MaterialAngularModules } from '../../../MaterialAngularModules';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserStorageService } from '../../../core/storage/user-storage.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [Modules, MaterialAngularModules],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signUpForm!: FormGroup;
  hidePassword = true;

  constructor(
    private formBuiler: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    UserStorageService.signOut();

    this.signUpForm = this.formBuiler.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = this.signUpForm.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      this.snackBar.open('Passwords do not match.', 'close', { duration: 5000, panelClass: 'error-snackbar' });
      return;
    }
    this.authService.register(this.signUpForm.value).subscribe({
      next: (response) => {
        this.snackBar.open('Sign up successfull', 'Close', { duration: 5000 });
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        this.snackBar.open('Sign up failed. Please try again.', 'Close', { duration: 5000, panelClass: 'error-snackbar' })
      }
    })
  }
}
