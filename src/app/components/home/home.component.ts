import {Component, OnInit} from '@angular/core';

import {GithubService} from "../../services/github.service";
import {User} from "../../interfaces/user";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<User> = [];
  errorMessage = '';

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.githubService.getUsers()
      .subscribe(response => {
        this.users = response;
      })
  }

  onSearch(username) {
    this.githubService.getNewUser(username)
      .pipe(
        map(v => {
          return v.items;
        })
      )
      .subscribe(value => {
        let newUsers = value;
        this.users = [...this.users, ...newUsers];
      }, (err) => {
        this.errorMessage = err.message;
        console.log(this.errorMessage)
      })
  }
}
