export class QuizQuestion {
    constructor(
      public id: number,
      public question: string,
      public questionType: string,
      public answerOptions: string[],
      public answer: string,
      public marks: number,
      public selected: boolean
    ) {}
  }
  