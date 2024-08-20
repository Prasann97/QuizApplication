import { Component } from '@angular/core';
import { QuizQuestion } from '../create-quiz-questions/models/QuizQustion.model';
import { QuizQuestionService } from '../quiz-question.service';

@Component({
  selector: 'app-show-quiz-questions',
  templateUrl: './show-quiz-questions.component.html',
  styleUrls: ['./show-quiz-questions.component.css']
})
export class ShowQuizQuestionsComponent {

  quizQuestions: QuizQuestion[] = [];
  quizService: QuizQuestionService = new QuizQuestionService();
  quizName: string = '';
  successMessage: boolean = false;
  errorMessage: boolean = false;


  ngOnInit(): void {
    this.quizQuestions = this.quizService.getQuizQuestions();
    console.log(this.quizQuestions);
  }

  submitSelected(): void {
    // Filter selected questions
    const selectedQuestions: QuizQuestion[] = this.quizQuestions.filter(q => q.selected);
    if(selectedQuestions && selectedQuestions.length > 0){
      // Handle selected questions and quiz name
      console.log('Quiz Name:', this.quizName);
      console.log('Selected Questions:', selectedQuestions);
      this.quizService.addQuizMap(this.quizName, selectedQuestions)
      this.quizQuestions = this.quizService.getQuizQuestions();
      this.quizName = '';
      this.successMessage=true;
    } else {
      this.errorMessage=true;
    }

    // Optionally, you can do something with the selected questions here
  }

  dismissAlert(): void {
    this.successMessage = false;
    this.errorMessage=false;
  }
}
