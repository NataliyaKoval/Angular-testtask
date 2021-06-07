import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GithubService} from "../../services/github.service";
import {Repo} from "../../interfaces/repo";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Array<Repo> = [];

  constructor(private router: ActivatedRoute, private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.getUserRepos()
  }

  getUserRepos() {
    const login = this.router.snapshot.params.login;
    this.githubService.getRepos(login)
      .subscribe(val => {
        this.repos = val;
      })

  }
}
