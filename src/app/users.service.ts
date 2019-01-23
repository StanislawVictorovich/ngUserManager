import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';
import { JSON_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users: User[];

  constructor(private http: HttpClient) {
    this.users = this.restoreFromLocalStorage();
    if (!this.users) {
      this.getUsers().subscribe(users => this.users = users);
    }
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(JSON_URL);
  }

  public updateUsers(): void {
    this.getUsers().subscribe(users => this.users = users);
  }

  public saveToLocalStorage(): void {
    try {
      localStorage.setItem('users', JSON.stringify(this.users));
    } catch (e) {
      console.error('Local Storage overflow ', e);
    }
  }

  public resetLocalStorage(): void {
    localStorage.clear();
  }

  public restoreFromLocalStorage(): User[] {
    return JSON.parse(localStorage.getItem('users'));
  }
}