// import { Injectable } from '@angular/core';
// import { QuizQuestion } from './create-quiz-questions/models/QuizQustion.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuizQuestionService {
//   private storageKey = 'quizQuestions';
//   private quizMapStorageKey = 'quizMap';
//   quizMap: Map<string, QuizQuestion[]> = new Map();


//   constructor() {
//     this.loadQuizQuestions();
//     this.loadQuizMap();
//   }

//   getQuizQuestions(): QuizQuestion[] {
//     return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
//   }

//   setQuizQuestions(questions: QuizQuestion[]): void {
//     localStorage.setItem(this.storageKey, JSON.stringify(questions));
//   }

//   addQuizQuestion(question: QuizQuestion): void {
//     const questions = this.getQuizQuestions();
//     questions.push(question);
//     this.setQuizQuestions(questions);
//   }

//   private loadQuizQuestions(): void {
//     const storedQuestions = localStorage.getItem(this.storageKey);
//     if (storedQuestions) {
//       this.setQuizQuestions(JSON.parse(storedQuestions));
//     }
//   }

//   private loadQuizMap(): void {
//     const storedQuestions = localStorage.getItem(this.quizMapStorageKey);
//     if (storedQuestions) {
//       this.setQuizMap(JSON.parse(storedQuestions));
//     }
//   }

//   setQuizMap(map : Map<string, QuizQuestion[]>): void {
//     localStorage.setItem(this.quizMapStorageKey, JSON.stringify(map));
//   }

//   addQuizMap(quizName: string, quiz: QuizQuestion[]): void {
//     const map = this.getQuizMap();
//     if(map.size=== undefined || map.size==0){
//       this.quizMap.set(quizName, quiz);
//       this.setQuizMap(map);
//     } else{
//       map.set(quizName, quiz);
//       this.setQuizMap(map);
//     }
//   }

//   getQuizMap(): Map<string, QuizQuestion[]> {
//     return JSON.parse(localStorage.getItem(this.quizMapStorageKey) || '[]');
//   }

// }

import { Injectable } from '@angular/core';
import { QuizQuestion } from './create-quiz-questions/models/QuizQustion.model';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionService {
  private storageKey = 'quizQuestions';
  private quizMapStorageKey = 'quizMap';
  quizMap: Map<string, QuizQuestion[]> = new Map();

  constructor() {
    this.loadQuizQuestions();
    this.loadQuizMap();
  }

  // Retrieve quiz questions from local storage
  getQuizQuestions(): QuizQuestion[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  // Store quiz questions in local storage
  setQuizQuestions(questions: QuizQuestion[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(questions));
  }

  // Add a new quiz question to local storage
  addQuizQuestion(question: QuizQuestion): void {
    const questions = this.getQuizQuestions();
    questions.push(question);
    this.setQuizQuestions(questions);
  }

  // Load quiz questions from local storage when the service is initialized
  private loadQuizQuestions(): void {
    const storedQuestions = localStorage.getItem(this.storageKey);
    if (storedQuestions) {
      this.setQuizQuestions(JSON.parse(storedQuestions));
    }
  }

  // Load the quiz map from local storage
  private loadQuizMap(): void {
    const storedMap = localStorage.getItem(this.quizMapStorageKey);
    if (storedMap) {
      // Convert the parsed object back to a Map
      const obj = JSON.parse(storedMap);
      this.quizMap = new Map<string, QuizQuestion[]>(
        Object.entries(obj)
      );
    }
  }

  // Store the quiz map in local storage
  setQuizMap(map: Map<string, QuizQuestion[]>): void {
    const obj = Object.fromEntries(map); // Convert Map to plain object
    localStorage.setItem(this.quizMapStorageKey, JSON.stringify(obj));
  }

  // Add a new quiz to the map and save it in local storage
  addQuizMap(quizName: string, quiz: QuizQuestion[]): void {
    const map = this.getQuizMap();
    map.set(quizName, quiz);
    this.setQuizMap(map);
  }

  // Retrieve the quiz map from local storage
  getQuizMap(): Map<string, QuizQuestion[]> {
    const storedMap = localStorage.getItem(this.quizMapStorageKey);
    if (!storedMap) {
      return new Map<string, QuizQuestion[]>();
    }
    const obj = JSON.parse(storedMap);
    return new Map<string, QuizQuestion[]>(Object.entries(obj));
  }
}
