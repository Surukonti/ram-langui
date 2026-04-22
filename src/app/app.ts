import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.html'
})
export class App {

  loading: boolean = false;
  score: number = 0;
  total: number = 0;

  word: any;


  userAnswer: string = '';
  result: string = '';

  userAnswerGerman: string = '';
  resultGerman: string = '';

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
    this.loadWord();
  }

  loadWord() {
    this.loading = true;

    this.http.get(`${environment.apiUrl}/api/word/random`)
      .subscribe((data: any) => {
        console.log("API DATA:", data);

        this.word = data;

        // reset inputs
        this.userAnswer = '';
        this.result = '';

        this.userAnswerGerman = '';
        this.resultGerman = '';

        this.loading = false;
        this.cd.detectChanges();
      });
  }

 
  checkAnswer() {
    if (!this.word) return;

    this.total++;

    if (this.userAnswer.trim().toLowerCase() === this.word.english.toLowerCase()) {
      this.result = "✅ Correct!";
      this.score++;
    } else {
      this.result = "❌ Wrong!";
    }
  }

  
  checkGermanAnswer() {
    if (!this.word) return;

    if (this.userAnswerGerman.trim().toLowerCase() === this.word.german.toLowerCase()) {
      this.resultGerman = "✅ Correct!";
    } else {
      this.resultGerman = "❌ Wrong!";
    }
  }
}