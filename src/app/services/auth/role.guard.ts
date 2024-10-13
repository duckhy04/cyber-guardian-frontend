import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { UserStorageService } from '../storage/user-storage.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const expectedRole = route.data['expectedRole'];  // role được định nghĩa trong route
  const userRole = UserStorageService.getUserRole();  // lấy role của user từ authService

  if (userRole === expectedRole) {
    return true;
  } else {
    // Nếu role không khớp, điều hướng về trang không có quyền truy cập hoặc trang login
    router.navigate(['/not-authorized']);
    return false;
  }
};
