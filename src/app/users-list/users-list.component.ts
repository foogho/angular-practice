import { Component, OnDestroy, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  users: any;

  constructor(private usersSerivce: UsersService) {}

  ngOnInit(): void {
    this.usersSerivce.getUsers().subscribe((users: []) => {
      this.users = users;
    });
  }

  getSelectedUser(userId) {
    console.log(userId);
  }
}
