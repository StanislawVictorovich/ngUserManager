import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { AVATAR_URL } from '../constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private usersService: UsersService) { }

  public get users(): User[] {
    return this.usersService.users;
  }

  public getUserRegistrationByIndex(index: number): Date {
    let date: string = this.users[index].registered;
    if (date[10] === 'T') { // converting to correct string date format
      return new Date(date.replace('T', ' '));
    } else {
      return new Date(date);
    }
  }

  public deleteUserByIndex(index: number): void {
    this.users.splice(index, 1);
    this.usersService.saveToLocalStorage();
  }

  public getAvatarByIndex(index: number): string {
    return `${AVATAR_URL}${index}`;
  }
}