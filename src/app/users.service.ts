import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(this.apiUrl);
  }

  getUser(id) {
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  addUser(user) {
    return this.httpClient.post(
      'https://jsonplaceholder.typicode.com/users',
      user
    );
  }
}
