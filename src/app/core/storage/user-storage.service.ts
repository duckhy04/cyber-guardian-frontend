import { Injectable } from '@angular/core';

const TOKEN = "token";
const USER = "user";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  public saveUser(user: any): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  static getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(TOKEN);
    }
    return null;
  }

  static getUser(): any {
    if (typeof window !== 'undefined' && window.localStorage) {
      const user = localStorage.getItem(USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  static getUserId(): string {
    const user = this.getUser();
    return user ? user.userId : '';
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }

  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    if (token === null) {
      return false;
    }
    const role = this.getUserRole();
    return role === 'ADMIN';
  }

  static isUserLoggedIn(): boolean {
    const token = this.getToken();
    if (token === null) {
      return false;
    }
    const role = this.getUserRole();
    return role === 'USER';
  }

  static signOut(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
    }
  }
}
