import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  template: `<p>Id : {{ user.id }}</p>
    <button mat-raised-button (click)="onClickUser()" [color]="'primary'">
      select me
    </button>
    <button
      mat-raised-button
      (click)="onClickUserWithoutId()"
      style="margin-left : 5px"
    >
      select me(without id)
    </button> `,
    styles : [`
      p {
        margin-top : 10px
      }
    `],
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
