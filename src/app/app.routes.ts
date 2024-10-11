import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: SigninComponent, pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'user',
        loadComponent: () => import('./components/user/user.component').then((m) => m.UserComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./components/user/components/dashboard/dashboard.component').then((m) => m.DashboardComponent)
            },
            {
                path: 'post-question',
                loadComponent: () => import('./components/user/components/post-question/post-question.component').then((m) => m.PostQuestionComponent)
            },
        ]
    },
    {
        path: 'admin',
        loadComponent: () => import('./components/admin/admin.component').then((m) => m.AdminComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./components/admin/components/dashboard/dashboard.component').then((m) => m.DashboardComponent)
            },
            {
                path: 'category',
                loadComponent: () => import('./components/admin/components/category/category.component').then((m) => m.CategoryComponent)
            },
        ]
    }
];
