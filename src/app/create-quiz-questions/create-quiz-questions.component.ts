import { Component } from '@angular/core';
import { QuizQuestion } from './models/QuizQustion.model';
import { QuizQuestionService } from '../quiz-question.service';

@Component({
  selector: 'app-create-quiz-questions',
  templateUrl: './create-quiz-questions.component.html',
  styleUrls: ['./create-quiz-questions.component.css']
})
export class CreateQuizQuestionsComponent {

  quizQuestion : QuizQuestion = new QuizQuestion(0,"","",["","","",""],"",0,false);
  questionTypes = ['Multiple Choice', 'True/False', 'Short Answer'];
  quizService: QuizQuestionService = new QuizQuestionService();
  successMessage = false;

  ngOnInit(): void {
    this.successMessage = false;
  }

  onSubmit() {
    this.quizService.addQuizQuestion(this.quizQuestion);
    console.log(this.quizQuestion);
    console.log(this.quizService.getQuizQuestions());
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.quizQuestion = new QuizQuestion(0, '', '', [], '', 0,false);
    this.successMessage = true;
  }

  dismissAlert(): void {
    this.successMessage = false;
  }

}
