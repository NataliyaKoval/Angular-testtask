import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../services/github.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<User> = [];

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.githubService.getUsers()
      .subscribe(response => {
        this.users = response;
      })
  }

}
