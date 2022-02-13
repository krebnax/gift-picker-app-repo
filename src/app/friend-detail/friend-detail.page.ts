import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Friend } from '../models/friend';
import { FriendsService } from '../services/friends-service/friends.service';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.page.html',
  styleUrls: ['./friend-detail.page.scss'],
})
export class FriendDetailPage implements OnInit, OnDestroy {
  currentFriend: Friend;
  currentFriendSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private friendsSvc: FriendsService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((pm) => {
      const friendId = Number(pm.get('friendId'));
      this.currentFriendSub = this.friendsSvc
        .getOne(friendId)
        .subscribe((friend) => {
          this.currentFriend = friend;
        });
    });
  }

  ionViewDidEnter() {}
  onGotoSurvey() {
    this.router.navigate(['/survey']);
  }
  onDelete(friendId: number): void {
    this.alertCtrl
      .create({
        header: 'Warning',
        message: 'This item will be deleted forever. Are you sure?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.friendsSvc.delete(friendId);
              this.router.navigate(['/']);
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  ngOnDestroy(): void {
    this.currentFriendSub.unsubscribe();
  }
}
