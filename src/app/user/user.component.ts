import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DataService]
})
export class UserComponent implements OnInit {

  userList: User[] = [];

  constructor(private dataService: DataService) { }

  getUsers() {
    this.dataService.getUsers()
      .subscribe( items => {
        this.userList = items;
        console.log('data from dataservice: ' + this.userList[0]);
      });
  }

  ngOnInit() {
    this.getUsers();
  }

}
