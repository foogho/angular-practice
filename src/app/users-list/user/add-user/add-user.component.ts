import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private userSerivce: UsersService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.userSerivce
      .addUser(this.userForm.value)
      .subscribe((value) => console.log(value));
  }
}
