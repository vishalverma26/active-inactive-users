import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: 'inactive.component.html',
  styles: [
    `a {
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }`
  ]
})
export class InactiveUsersComponent {
  inactiveUsers = this.users.inactiveUsers;

  constructor(private users: UsersService) {}

  changeToActive(index: number) {
    this.users.setToActive(index);
  }
}
