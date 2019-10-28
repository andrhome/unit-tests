import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public user: {[key: string]: any};

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  fetchUser(): void {
    this.userService.getOne(1).subscribe(user => {
      this.user = user;
    });
  }

}
