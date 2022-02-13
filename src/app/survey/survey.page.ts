import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AnswerType } from '../enums/answer-type';
import { GiftModalPage } from '../gift-modal/gift-modal.page';
import { AnswerTypeCounter } from '../models/answer-type-counter';
import { SurveyQuestion } from '../models/survey-question';
import { GiftService } from '../services/gift-service/gift.service';
import { SurveyService } from '../services/survey-service/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit, OnDestroy {
  questions: SurveyQuestion[];

  answers = [];
  private questionsSub: Subscription;

  constructor(private surveySvc: SurveyService, private giftSvc: GiftService, private modalCtrl: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.questionsSub = this.surveySvc
      .getQuestions()
      .subscribe((questions) => (this.questions = questions));
  }

  ngOnDestroy(): void {
    this.questionsSub.unsubscribe();
  }
  onChange(e): void {
    const elId = e.srcElement.id;
    const value = e.detail.value;
    const element = this.answers.find((x) => x.id === elId);
    if (element) {
      element.val = value;
    } else {
      this.answers.push({
        id: elId,
        val: value,
      });
    }
  }

  async onFinish() {
    const answerTypeCounter: AnswerTypeCounter = {
      aCount: 0,
      rCount: 0,
      gCount: 0,
    };

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.answers.length; i++) {
      const val = this.answers[i].val;
      const type = AnswerType[val];
      switch (val) {
        case AnswerType.romantic.toString():
          answerTypeCounter.rCount++;
          break;
        case AnswerType.adventurous.toString():
          answerTypeCounter.aCount++;
          break;
        case AnswerType.general.toString():
          answerTypeCounter.gCount++;
          break;
      }
    }

    const gift = this.giftSvc.pickGift(answerTypeCounter);

    const modal = await this.modalCtrl.create({
      component: GiftModalPage,
      componentProps: {
        gift
      }
    });

    await modal.present();
  }
}
