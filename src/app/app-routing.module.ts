import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizQuestionsComponent } from './create-quiz-questions/create-quiz-questions.component';
import { ShowQuizQuestionsComponent } from './show-quiz-questions/show-quiz-questions.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'createquizquestions', component: CreateQuizQuestionsComponent },
  { path: 'showquizquestions', component: ShowQuizQuestionsComponent },
  { path: 'startquiz', component: StartQuizComponent },
  { path: 'quiz/:quizName', component: QuizComponent },
  { path: 'quizresult', component: QuizResultComponent },
  { path: 'result/:quizName', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
