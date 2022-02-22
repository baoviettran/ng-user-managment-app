
import { UserInfoService } from 'src/app/services/user-info.service';
import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/models/user-dto';
import { ActivatedRoute, Router } from '@angular/router';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  User: UserDto = {
  email: "" ,
  fullName: "",
  password: "",
  userName: "",
  };
  submitted = false;


  constructor(
    private userService: UserInfoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      userName: this.User.userName,
      password: this.User.password,
      fullName: this.User.fullName,
      email: this.User.email
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.User = {
    email: "" ,
    fullName: "",
    password: "",
    userName: "",
    };
  }

  goBack() {
    this.router.navigate(['/dashboard']);

  }

}
