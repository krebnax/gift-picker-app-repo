import { AnswerType } from '../enums/answer-type';
import { AnswerTypeCounter } from '../models/answer-type-counter';

export class AnswerManager {
  decideWeightedAnswerType(counter: AnswerTypeCounter): AnswerType {
    if (
      counter.aCount === counter.gCount &&
      counter.aCount === counter.rCount
    ) {
      return AnswerType.unknown;
    }

    const greatestValue = Object.values(counter).sort().pop();
    const val = Object.keys(counter).find((x) => counter[x] === greatestValue);

    switch (val) {
      case 'aCount':
        return AnswerType.adventurous;
      case 'rCount':
        return AnswerType.romantic;
      case 'gCount':
        return AnswerType.general;
    }

    return AnswerType.unknown;
  }
}
