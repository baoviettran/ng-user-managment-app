import { AuthService } from './../../services/auth.service';
import { Account } from './../../models/account';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {} from '../../models/account'
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account: Account = {
    userName: "",
    password: ""
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenService: AuthenticationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.router.navigate([""]);
    }
  }

  login() {
    this.authenService.login(this.account.userName, this.account.password)
    .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([""]);
                },
                error => {
                    console.log(error);
                });
  }



}
