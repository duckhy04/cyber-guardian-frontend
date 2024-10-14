import { Routes } from '@angular/router';
import { SigninComponent } from './features/auth/signin/signin.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { roleGuard } from './core/guard/role.guard';

export const routes: Routes = [
    { path: '', component: SigninComponent, pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
    { path: 'signup', component: SignupComponent },

    // // Routes dành cho user
    // {
    //     path: 'user',
    //     loadComponent: () => import('./components/user/user.component').then((m) => m.UserComponent),
    //     canActivate: [roleGuard],
    //     data: { expectedRole: 'USER' }, // Áp dụng role guard, chỉ user có vai trò USER được truy cập
    //     children: [
    //         {
    //             path: 'dashboard',
    //             loadComponent: () => import('./components/user/components/dashboard/dashboard.component').then((m) => m.DashboardComponent)
    //         },
    //         {
    //             path: 'post-question',
    //             loadComponent: () => import('./components/user/components/post-question/post-question.component').then((m) => m.PostQuestionComponent)
    //         },
    //     ]
    // },

    // // Routes dành cho admin
    // {
    //     path: 'admin',
    //     loadComponent: () => import('./components/admin/admin.component').then((m) => m.AdminComponent),
    //     canActivate: [roleGuard],
    //     data: { expectedRole: 'ADMIN' }, // Áp dụng role guard, chỉ user có vai trò ADMIN được truy cập
    //     children: [
    //         {
    //             path: 'dashboard',
    //             loadComponent: () => import('./components/admin/components/dashboard/dashboard.component').then((m) => m.DashboardComponent)
    //         },
    //         {
    //             path: 'category',
    //             loadComponent: () => import('./components/admin/components/category/category.component').then((m) => m.CategoryComponent)
    //         },
    //     ]
    // },

    // Route not-authorized (có thể thêm vào nếu cần)
    {
        path: 'not-authorized',
        loadComponent: () => import('./features/auth/not-authorized/not-authorized.component').then((m) => m.NotAuthorizedComponent)
    },

    // Redirect các route không hợp lệ
    { path: '**', redirectTo: 'login' }
];
