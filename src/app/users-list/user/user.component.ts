import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  template: `<p>my Id : {{ user.id }}</p>
    <button (click)="onClickUser()">select me</button>
    <button (click)="onClickUserWithoutId()">select me(without id)</button>
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

  onClickUserWithoutId() {
    this.router.navigate(['users', this.user.id], {
      queryParams: { userId: false },
    });
  }

  onDelete() {
    this.usersService.deleteUser(this.user.id);
  }
}
