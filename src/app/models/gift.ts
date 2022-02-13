import { AnswerType } from '../enums/answer-type';

export interface Gift {
  id: number;
  name: string;
  description: string;
  price: number;
  type: AnswerType; // could have been another interface but for the sake of simplicity it has been chosen as string
  /*
    type field will hold A, R or G
    A: Adventure
    R: Romantic
    G: General
   */
}
