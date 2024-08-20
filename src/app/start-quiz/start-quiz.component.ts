import { Component, OnInit } from '@angular/core';
import { QuizQuestionService } from '../quiz-question.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit{

  quizNames: string[] = [];
  successMessage: string | null = '';

  constructor(private quizService : QuizQuestionService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.quizService.getQuizMap().forEach((value, key) => {
      console.log(`${key}`);
      this.quizNames.push(`${key}`);
    });
    console.log(this.quizNames);
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['message'] || null;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  startQuiz(quizName: string): void {
    // Navigate to the quiz page with the selected quiz name as a parameter
    this.router.navigate(['/quiz', quizName]);
  }

  dismissAlert(): void {
    this.successMessage = null;
  }
}
