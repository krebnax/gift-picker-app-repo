import { Injectable } from '@angular/core';
import { GiftProvider } from 'src/app/data/gift-provider';
import { AnswerType } from 'src/app/enums/answer-type';
import { AnswerManager } from 'src/app/managers/answer-manager';
import { AnswerTypeCounter } from 'src/app/models/answer-type-counter';
import { Gift } from 'src/app/models/gift';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private gifts: Gift[];
  constructor() {
    const giftProvider = new GiftProvider();
    this.gifts = giftProvider.provide();
  }

  pickGift(counter: AnswerTypeCounter): Gift {
    const answerManager = new AnswerManager();
    const answerType = answerManager.decideWeightedAnswerType(counter);

    let index;
    if (answerType === AnswerType.unknown) {
      index = Math.floor(Math.random() * this.gifts.length);

      return this.gifts[index];
    }

    const filtered = this.gifts.filter((x) => x.type === answerType);

    index = Math.floor(Math.random() * filtered.length);
    return filtered[index];
  }
}
