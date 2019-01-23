import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private usersService: UsersService) { }

  public reset():void {
    this.usersService.updateUsers();
  }
}