import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from '../models/friend';
import { FriendsService } from '../services/friends-service/friends.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  friends: Friend[];
  private friendsSub: Subscription;

  constructor(private friendsSvc: FriendsService) {}

  ngOnInit(): void {
    this.friendsSub = this.friendsSvc.getAll().subscribe((friends) => {
      this.friends = friends;
    });
  }

  ngOnDestroy(): void {
    if (this.friendsSub) {
      this.friendsSub.unsubscribe();
    }
  }

  ionOnViewDidEnter() {

  }
}
