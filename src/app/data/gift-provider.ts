import { AnswerType } from '../enums/answer-type';
import { Gift } from '../models/gift';

export class GiftProvider {
  private gifts: Gift[] = [
    {
      id: 1,
      name: 'Flowers',
      description: 'A timeless classic',
      price: 15.99,
      type: AnswerType.romantic,
    },
    {
      id: 2,
      name: 'A Sports Car',
      description: 'You must be really loving that friend',
      price: 30450,
      type: AnswerType.adventurous,
    },
    {
      id: 3,
      name: 'Horse',
      description: 'Well... I suppose you consumed every other option',
      price: 25000,
      type: AnswerType.adventurous,
    },
    {
      id: 4,
      name: 'Photo Album',
      description: 'I think they are not using a cloud service but hey it is a nice gift',
      price: 35.99,
      type: AnswerType.romantic,
    },
    {
      id: 5,
      name: 'Bread',
      description: 'Always a good idea. I guess...',
      price: 0.35,
      type: AnswerType.general,
    },
    {
      id: 6,
      name: 'Money',
      description: 'I\'m sure they are going to love it when they open the box. Especially the creative thought you put into it.',
      price: 500,
      type: AnswerType.general,
    },
  ];

  provide(): Gift[] {
    return this.gifts;
  }
}
