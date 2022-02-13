import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Gift } from '../models/gift';

@Component({
  selector: 'app-gift-modal',
  templateUrl: './gift-modal.page.html',
  styleUrls: ['./gift-modal.page.scss'],
})
export class GiftModalPage implements OnInit {
  @Input() gift: Gift;
  constructor(private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {}

  onExit() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/']);
  }
}
