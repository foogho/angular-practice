import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  template: `<p>my Id : {{ user.id }} , my name : {{ user.name }}</p>
    <button (click)="onClickUser()">select me</button>
    <button (click)="onDelete()">delete me!</button> `,
})
export class UserComponent {
  @Input() user;
  @Output() clickUser = new EventEmitter();

  constructor(private usersService: UsersService, private router: Router) {}

  onClickUser() {
    this.clickUser.emit(this.user.id);
    this.router.navigate(['users', this.user.id]);
  }

  onDelete() {
    this.usersService.deleteUser(this.user.id);
  }
}
