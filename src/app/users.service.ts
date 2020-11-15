import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Mohammad' },
    { id: 3, name: 'Mazaher' },
  ];

  usersObs$ = new BehaviorSubject(this.users);

  getUsers() {
    return this.usersObs$;
  }

  getUser(id) {
    return this.users.find((user) => user.id == id);
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id != id);
    this.usersObs$.next(this.users);
  }
}
