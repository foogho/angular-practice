import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styles: [
    `
      button {
        float: right;
      }
    `,
  ],
})
export class UsersListComponent implements OnInit {
  users: any;

  constructor(private usersSerivce: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.usersSerivce.getUsers().subscribe((users: []) => {
      this.users = users;
    });
  }

  getSelectedUser(userId) {
    console.log(userId);
  }

  onAddUser() {
    this.router.navigate(['users', 'add']);
  }
}
