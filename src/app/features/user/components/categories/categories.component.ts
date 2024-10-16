import { Component } from '@angular/core';
import { Category } from '../../../../models/category';
import { UserService } from '../../services/user.service';
import { Modules } from '../../../../shared/modules/ImportModules';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [Modules],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  categories: Category[] = [];

  constructor(
    private userSerivce: UserService
  ) {}

  ngOnInit(){
    this.getAllCategories();
  }

  getAllCategories() {
    this.userSerivce.getAllCategories().subscribe({
      next: (response) => {
        response.forEach((category: Category) => {
          this.categories.push(category);
        })
      }
    })
  }

}
