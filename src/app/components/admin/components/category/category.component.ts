import { Component } from '@angular/core';
import { MaterialAngularModules } from '../../../../MaterialAngularModules';
import { Modules } from '../../../../ImportModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MaterialAngularModules, Modules],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryForm!: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  category: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
    this.getAllCategories();
  }

  createCategory() {
    if (this.categoryForm.valid) {
      this.adminService.createCategory(this.categoryForm.value).subscribe({
        next: (response) => {
          this.snackBar.open("Posted category success", "Close", { duration: 5000 })
          this.router.navigate(['/admin/dashboard'])
        },
        error: (error) => {
          this.snackBar.open('Post failed', 'Close', { duration: 5000, panelClass: 'error-snackbar' })
        }
      })
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }

  getAllCategories(){
    this.adminService.getAllCategories().subscribe({
      next: (response) => {
        this.category = response;
      },
      error: (error) => {
        this.snackBar.open('Error', 'Close', {duration: 1000})
      }
    })
  }
}
