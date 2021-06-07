import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GithubService} from "../../services/github.service";
import {Repo} from "../../interfaces/repo"
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Array<Repo> = [];
  closeModal: string = '';

  constructor(
    private router: ActivatedRoute,
    private githubService: GithubService,
    private modalService: NgbModal) {
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

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
