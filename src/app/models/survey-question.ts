import { SurveyAnswer } from './survey-answer';

export interface SurveyQuestion {
  id: number;
  question: string;
  answers: SurveyAnswer[];
}
