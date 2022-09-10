import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: 'active.component.html',
  styles: [
    `a {
      color: red;
      text-decoration: underline;
      cursor: pointer;
    }`
  ]
})
export class ActiveUsersComponent {
  activeUsers = this.users.activeUsers;

  constructor(private users: UsersService) {}

  changeToInactive(index: number) {
    this.users.setToInactive(index);
  }
}
