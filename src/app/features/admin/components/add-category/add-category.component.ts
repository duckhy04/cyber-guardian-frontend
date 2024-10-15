import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modules } from '../../../../shared/modules/ImportModules';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [Modules],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {

  addCategoryForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.addCategoryForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.addCategoryForm.valid) {
      this.adminService.addCategory(this.addCategoryForm.value).subscribe({
        next: (response) => {
          console.log("Success")
          console.log('Category added:', this.addCategoryForm.value);
          this.addCategoryForm.reset();
        },
        error: (error) => {
          console.log("Error")
        }
      })
      
    } else {
      this.addCategoryForm.markAllAsTouched();
    }
  }
}
