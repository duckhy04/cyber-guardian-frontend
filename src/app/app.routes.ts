import { Routes } from '@angular/router';
import { roleGuard } from './core/guard/role.guard';

export const routes: Routes = [
    // { path: '', redirectTo: '/auth', pathMatch: 'full' },

    // Routes dành cho auth
    {
        path: 'auth',
        loadComponent: () => import('./features/auth/auth.component').then((m) => m.AuthComponent),
        children: [
            {
                path: 'signin',
                loadComponent: () => import('./features/auth/signin/signin.component').then((m) => m.SigninComponent)
            },
            {
                path: 'signup',
                loadComponent: () => import('./features/auth/signup/signup.component').then((m) => m.SignupComponent)
            },
        ]
    },

    // Routes dành cho user
    {
        path: 'user',
        loadComponent: () => import('./features/user/user.component').then((m) => m.UserComponent),
        // canActivate: [roleGuard],
        data: { expectedRole: 'USER' }, // Áp dụng role guard, chỉ user có vai trò USER được truy cập
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/user/components/dashboard/dashboard.component').then((m) => m.DashboardComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./features/user/components/categories/categories.component').then((m) => m.CategoriesComponent)
            },
            {
                path: 'ask-question',
                loadComponent: () => import('./features/user/components/ask-question/ask-question.component').then((m) => m.AskQuestionComponent)
            },
        ]
    },

    // Routes dành cho admin
    {
        path: 'admin',
        loadComponent: () => import('./features/admin/admin.component').then((m) => m.AdminComponent),
        canActivate: [roleGuard],
        data: { expectedRole: 'ADMIN' }, // Áp dụng role guard, chỉ user có vai trò ADMIN được truy cập
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/admin/components/dashboard/dashboard.component').then((m) => m.DashboardComponent)
            },
            {
                path: 'category',
                loadComponent: () => import('./features/admin/components/add-category/add-category.component').then((m) => m.AddCategoryComponent)
            },
            {
                path: 'manager-users',
                loadComponent: () => import('./features/admin/components/manager-users/manager-users.component').then((m) => m.ManagerUsersComponent)
            },
        ]
    },

    // Route not-authorized 
    {
        path: 'not-authorized',
        loadComponent: () => import('./features/auth/not-authorized/not-authorized.component').then((m) => m.NotAuthorizedComponent)
    },

    // Redirect các route không hợp lệ
    // { path: '**', redirectTo: 'auth' }
];
