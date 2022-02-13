import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendsService } from '../services/friends-service/friends.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.page.html',
  styleUrls: ['./add-friend.page.scss'],
})
export class AddFriendPage implements OnInit {
  firstName: string;
  lastName: string;
  constructor(private friendsSvc: FriendsService, private router: Router) {}

  ngOnInit() {}

  onAdd(): void {
    if (!this.firstName || !this.lastName) {
      return;
    }

    this.friendsSvc.insert({
      firstName: this.firstName,
      lastName: this.lastName,
      id: 0,
      hasGift: false,
    });

    this.firstName = '';
    this.lastName = '';
    this.router.navigate(['/']);
  }
}
