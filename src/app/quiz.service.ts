import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizResultStorageKey = 'quizResultMap';
  private quizMap: Map<string, Object[]> = new Map();

  constructor() {
    this.loadQuizResultMap();
  }

  // Load the quiz map from local storage
  private loadQuizResultMap(): void {
    const storedMap = localStorage.getItem(this.quizResultStorageKey);
    if (storedMap) {
      // Convert the parsed object back to a Map
      const obj = JSON.parse(storedMap);
      this.quizMap = new Map<string, Object[]>(
        Object.entries(obj)
      );
    }
  }

  // Store the quiz map in local storage
  private setQuizMap(map: Map<string, Object[]>): void {
    const obj = Object.fromEntries(map); // Convert Map to plain object
    localStorage.setItem(this.quizResultStorageKey, JSON.stringify(obj));
  }

  // Add a new submission to the quiz map and save it in local storage
  addQuizMap(quizName: string, submissionData: Object): void {
    const map = this.getQuizMap();

    // Check if the quiz name already exists in the map
    if (map.has(quizName)) {
      const existingSubmissions = map.get(quizName);
      existingSubmissions?.push(submissionData);
    } else {
      map.set(quizName, [submissionData]); // Initialize with a new array if it doesn't exist
    }

    this.setQuizMap(map);
  }

  // Retrieve the quiz map from local storage
  getQuizMap(): Map<string, Object[]> {
    return this.quizMap;
  }
}
