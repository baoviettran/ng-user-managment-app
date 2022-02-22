import { UserInfoService } from 'src/app/services/user-info.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  currentUser: User = {
    userId: -1 ,
  email: "" ,
  fullName: "",
  password: "",
  userName: "",
  createdDate: new Date(),
  lastLoginDate: new Date()
  };
  message = '';

  constructor(
    private userinfoService: UserInfoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id: string): void {
    this.userinfoService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  goBack() {
    this.router.navigate(['/dashboard']);

  }



  // updateUser(): void {
  //   this.message = '';

  //   this.userinfoService.update(this.currentUser.userId, this.currentUser)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = response.message ? response.message : 'This user was updated successfully!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // deleteUser(): void {
  //   this.userinfoService.delete(this.currentUser.userId)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/dashboard']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
