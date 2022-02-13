import { AnswerType } from '../enums/answer-type';
import { SurveyQuestion } from '../models/survey-question';

export class QuestionProvider {
  private questions: SurveyQuestion[] = [
    {
      id: 1,
      question:
        'You are going down a road with your friend with a roadster. What is he/she doing?',
      answers: [
        {
          type: AnswerType.romantic,
          content: 'Puts on a slow music',
        },
        {
          type: AnswerType.adventurous,
          content: 'Standing up and waving around',
        },
        {
          type: AnswerType.general,
          content: 'Minding his/her business',
        },
      ],
    },
    {
      id: 2,
      question:
        'You are on a beach with your friend. It is a bit windy today. What is he/she doing?',
      answers: [
        {
          type: AnswerType.romantic,
          content: 'Picking up shells',
        },
        {
          type: AnswerType.general,
          content: 'Just walking trying to reach the destination',
        },
        {
          type: AnswerType.adventurous,
          content: 'Getting ready to jump into water',
        },
      ],
    },
    {
      id: 3,
      question:
        'You are on a party. You are the assigned selfie taker. On the screen you are seeing your friend...',
      answers: [
        {
          type: AnswerType.adventurous,
          content: 'Making a funny face while waving their arms around',
        },
        {
          type: AnswerType.romantic,
          content: 'Trying to hug someone',
        },
        {
          type: AnswerType.general,
          content: 'Smiling. I bet he/she is saying cheese in his/her mind',
        },
      ],
    },
    {
      id: 4,
      question:
        'It is movie night (yay!). Your friend gets to choose. And choose...',
      answers: [
        {
          type: AnswerType.romantic,
          content: 'Notebook',
        },
        {
          type: AnswerType.adventurous,
          content: 'Saving Private Ryan',
        },
        {
          type: AnswerType.general,
          content: 'Cosmos',
        },
      ],
    },
  ];

  provide(): SurveyQuestion[] {
    return this.questions;
  }
}
