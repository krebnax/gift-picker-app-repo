import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuestionProvider } from 'src/app/data/question-provider';
import { SurveyQuestion } from 'src/app/models/survey-question';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private questionCount: number;
  private questions = new BehaviorSubject<SurveyQuestion[]>([]);

  constructor() {
    this.questionCount = 3;
    const questionProvider = new QuestionProvider();
    this.questions.next(questionProvider.provide());
  }

  getQuestions(): Observable<SurveyQuestion[]> {
    return this.questions.pipe(
      take(1),
      map((questions) => {
        const length = questions.length;
        const pickedIndexes: number[] = [];
        let index: number;

        for (let i = 0; i < this.questionCount; i++) {
          index = Math.floor(Math.random() * length);

          if (pickedIndexes.some((x) => x === index)) {
            i--;
            continue;
          }

          pickedIndexes.push(index);
        }

        const response: SurveyQuestion[] = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let j = 0; j < pickedIndexes.length; j++) {
          response.push(questions[pickedIndexes[j]]);
        }

        return response;
      })
    );
  }
}
