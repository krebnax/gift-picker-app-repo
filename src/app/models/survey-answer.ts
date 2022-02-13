import { AnswerType } from '../enums/answer-type';

export interface SurveyAnswer {
  type: AnswerType;
  content: string;
}
