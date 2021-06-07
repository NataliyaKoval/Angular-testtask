import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {Repo} from "../interfaces/repo";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  rootUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get<User[]>(this.rootUrl);
  }

  public getRepos(login: string) {
    return this.http.get<Repo[]>(`${this.rootUrl}/${login}/repos`);
  }

}
