import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user;
  userId: number;
  showId: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersSerivce: UsersService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params);
    // });

    this.userId = this.activatedRoute.snapshot.params.id;
    this.showId =
      this.activatedRoute.snapshot.queryParams.userId === 'false' ? false : true;
    console.log(this.showId);

    this.user = this.usersSerivce.getUser(this.userId);
  }
}
