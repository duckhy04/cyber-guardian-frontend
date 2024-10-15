import { HttpInterceptorFn } from '@angular/common/http';
import { UserStorageService } from '../storage/user-storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = UserStorageService.getToken();
  if (authToken){
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    return next(authReq)
  }
  return next(req);
};
