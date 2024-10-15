import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MaterialAngularModules } from './shared/modules/MaterialAngularModules';
import { Modules } from './shared/modules/ImportModules';
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialAngularModules, Modules, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cyber-guardian-frontend';
  loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Bắt sự kiện điều hướng để hiển thị spinner khi chuyển trang
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true; // Hiển thị spinner khi bắt đầu điều hướng
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading = false; // Ẩn spinner khi điều hướng hoàn tất hoặc bị hủy
      }
    });
  }
}
