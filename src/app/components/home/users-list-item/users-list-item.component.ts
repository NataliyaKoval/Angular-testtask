import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.css']
})
export class UsersListItemComponent implements OnInit {
  @Input() user?: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
