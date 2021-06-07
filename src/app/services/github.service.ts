import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {Repo} from "../interfaces/repo";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  rootUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get<User[]>(`${this.rootUrl}/users`);
  }

  public getRepos(login: string) {
    return this.http.get<Repo[]>(`${this.rootUrl}/users/${login}/repos`);
  }

  public getNewUser(username: string) {
    let params = {q: username};
    return this.http.get<any>(`${this.rootUrl}/search/users`, {params});
  }
}
