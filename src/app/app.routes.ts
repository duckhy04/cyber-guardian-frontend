import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: SigninComponent, pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
];
