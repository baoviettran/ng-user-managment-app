import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList: User[] = [];
  constructor(private userService: UserInfoService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    return this.userService.getAllUsers().subscribe(
      data => {
        this.userList = data;
      }
    );
  }


}
