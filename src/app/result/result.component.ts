import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestionService } from '../quiz-question.service';
import { QuizService } from '../quiz.service';
import { QuizQuestion } from '../create-quiz-questions/models/QuizQustion.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  quizName: string | null = '';
  quizQuestions: QuizQuestion[] | undefined = [];
  selectedQuizQuestions: any;
  submissionData: any;

  constructor(private route: ActivatedRoute,
    private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizName = this.route.snapshot.paramMap.get('quizName');
    if (this.quizName) {
      const map = this.quizService.getQuizMap();
      if(map.size!=0)
      {
        const quizResult = map.get(this.quizName);
        console.log(quizResult);
        if (quizResult) {
          this.submissionData = quizResult;
        } else {
          this.submissionData = [];
        }
      }
      // Implement logic to display the quiz questions
    }
  }

}
