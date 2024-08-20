import { Component } from '@angular/core';
import { QuizQuestion } from '../create-quiz-questions/models/QuizQustion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestionService } from '../quiz-question.service';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  quizName: string | null = '';
  quizQuestions: QuizQuestion[] | undefined = [];
  selectedQuizQuestions: any;
  userName: string = '';
  userEmail: string = '';

  constructor(private route: ActivatedRoute, private quizQuestionService: QuizQuestionService, 
    private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizName = this.route.snapshot.paramMap.get('quizName');
    if (this.quizName) {
      const map = this.quizQuestionService.getQuizMap();
      if(map.size!=0)
      {
        this.quizQuestions = map.get(this.quizName);
        if (this.quizQuestions) {
          this.selectedQuizQuestions = this.quizQuestions;
        } else {
          this.selectedQuizQuestions = [];
        }
      }
      // Implement logic to display the quiz questions
    }
  }

  onSubmit(): void {
    // Collect all responses
    let obtainedMarks = 0;
    let totalMarks = 0;

    const responses = this.selectedQuizQuestions.map((q: { question: any; selectedAnswer: any; answer: any; marks: any; }) => {
      // Check if the selected answer matches the correct answer
      const isCorrect = q.selectedAnswer === q.answer;

      // If correct, add the marks to obtainedMarks
      if (isCorrect) {
        obtainedMarks += q.marks;
      }
      totalMarks += q.marks;

      return {
        question: q.question,
        selectedAnswer: q.selectedAnswer,
        answer: q.answer,
        marks: q.marks
      };
    });

    const submissionData = {
      name: this.userName,
      email: this.userEmail,
      responses: responses,
      obtainedMarks: obtainedMarks,
      totalMarks: totalMarks
    };
    const quiz = this.quizName || '';

    if (quiz) {
      this.quizService.addQuizMap(quiz, submissionData);
    }

    // Handle the collected responses
    console.log('Collected Responses:', responses);
    console.log('Collected submissionData:', submissionData);
    console.log(this.quizService.getQuizMap());
    this.router.navigate(['/startquiz'], { queryParams: { message: 'Response Submitted Successfully' } });

    // You can also send the responses to a server or perform other actions here
  }

}
