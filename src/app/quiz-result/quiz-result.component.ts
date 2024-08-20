import { Component } from '@angular/core';
import { QuizQuestionService } from '../quiz-question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent {

  quizNames: string[] = [];

  constructor(private quizService : QuizQuestionService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.quizService.getQuizMap().forEach((value, key) => {
      console.log(`${key}`);
      this.quizNames.push(`${key}`);
    });
    console.log(this.quizNames);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showResult(quizName: string): void {
    // Navigate to the quiz page with the selected quiz name as a parameter
    this.router.navigate(['/result', quizName]);
  }
}
