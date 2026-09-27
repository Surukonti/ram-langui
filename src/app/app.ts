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
  uiLanguage = 'en';

  languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ar', name: 'العربية' },
    { code: 'uk', name: 'Українська' },
    { code: 'ru', name: 'Русский' },
    { code: 'tr', name: 'Türkçe' }
  ];

  translations: any = {
    en: {
      title: 'German Learning App',
      language: 'Language',
      level: 'Level',
      germanEnglish: 'German → English',
      englishGerman: 'English → German',
      puzzle: 'Fill Missing Letters',
      score: 'Score',
      loading: 'Loading word...',
      typeEnglish: 'Type English word',
      typeGerman: 'Type German word',
      check: 'Check',
      answer: 'Answer',
      nextWord: 'Next Word',
      previousWord: 'Previous Word',
      checkPuzzle: 'Check Puzzle',
      wordEnglish: 'English',
      wordLevel: 'Level',
      wordType: 'Word type',
      correct: 'Correct!',
      wrong: 'Wrong!',
      tryAgain: 'Try again',
      translation: 'Translation',
      searchPlaceholder: 'Search German word',
      search: 'Search',
      listen: 'Listen',
      germanVocabulary: 'German Vocabulary',
      germanToEnglish: 'German → English',
      englishToGerman: 'English → German',
      missingLetters: 'Fill Missing Letters',
      noWordFound: 'Word not found.',
      failedSearch: 'Failed to search word.'
    },

    de: {
      title: 'Deutsch Lern-App',
      language: 'Sprache',
      level: 'Niveau',
      germanEnglish: 'Deutsch → Englisch',
      englishGerman: 'Englisch → Deutsch',
      puzzle: 'Fehlende Buchstaben',
      score: 'Punkte',
      loading: 'Wort wird geladen...',
      typeEnglish: 'Englisches Wort eingeben',
      typeGerman: 'Deutsches Wort eingeben',
      check: 'Prüfen',
      answer: 'Antwort',
      nextWord: 'Nächstes Wort',
      previousWord: 'Vorheriges Wort',
      checkPuzzle: 'Rätsel prüfen',
      wordEnglish: 'Englisch',
      wordLevel: 'Niveau',
      wordType: 'Wortart',
      correct: 'Richtig!',
      wrong: 'Falsch!',
      tryAgain: 'Versuchen Sie es erneut',
      translation: 'Übersetzung',
      searchPlaceholder: 'Deutsches Wort suchen',
      search: 'Suchen',
      listen: 'Anhören',
      germanVocabulary: 'Deutscher Wortschatz',
      germanToEnglish: 'Deutsch → Englisch',
      englishToGerman: 'Englisch → Deutsch',
      missingLetters: 'Fehlende Buchstaben',
      noWordFound: 'Wort nicht gefunden.',
      failedSearch: 'Suche fehlgeschlagen.'
    },

    ar: {
      title: 'تطبيق تعلم الألمانية',
      language: 'اللغة',
      level: 'المستوى',
      germanEnglish: 'الألمانية → الإنجليزية',
      englishGerman: 'الإنجليزية → الألمانية',
      puzzle: 'املأ الحروف الناقصة',
      score: 'النتيجة',
      loading: 'جاري تحميل الكلمة...',
      typeEnglish: 'اكتب الكلمة الإنجليزية',
      typeGerman: 'اكتب الكلمة الألمانية',
      check: 'تحقق',
      answer: 'الإجابة',
      nextWord: 'الكلمة التالية',
      previousWord: 'الكلمة السابقة',
      checkPuzzle: 'تحقق من اللغز',
      wordEnglish: 'الإنجليزية',
      wordLevel: 'المستوى',
      wordType: 'نوع الكلمة',
      correct: 'صحيح!',
      wrong: 'خطأ!',
      tryAgain: 'حاول مرة أخرى',
      translation: 'الترجمة',
      searchPlaceholder: 'ابحث عن كلمة ألمانية',
      search: 'بحث',
      listen: 'استمع',
      germanVocabulary: 'المفردات الألمانية',
      germanToEnglish: 'الألمانية → الإنجليزية',
      englishToGerman: 'الإنجليزية → الألمانية',
      missingLetters: 'املأ الحروف الناقصة',
      noWordFound: 'الكلمة غير موجودة.',
      failedSearch: 'فشل البحث.'
    },

    uk: {
      title: 'Застосунок для вивчення німецької',
      language: 'Мова',
      level: 'Рівень',
      germanEnglish: 'Німецька → Англійська',
      englishGerman: 'Англійська → Німецька',
      puzzle: 'Заповнити пропущені літери',
      score: 'Рахунок',
      loading: 'Завантаження слова...',
      typeEnglish: 'Введіть англійське слово',
      typeGerman: 'Введіть німецьке слово',
      check: 'Перевірити',
      answer: 'Відповідь',
      nextWord: 'Наступне слово',
      previousWord: 'Попереднє слово',
      checkPuzzle: 'Перевірити завдання',
      wordEnglish: 'Англійська',
      wordLevel: 'Рівень',
      wordType: 'Частина мови',
      correct: 'Правильно!',
      wrong: 'Неправильно!',
      tryAgain: 'Спробуйте ще раз',
      translation: 'Переклад',
      searchPlaceholder: 'Пошук німецького слова',
      search: 'Пошук',
      listen: 'Слухати',
      germanVocabulary: 'Німецька лексика',
      germanToEnglish: 'Німецька → Англійська',
      englishToGerman: 'Англійська → Німецька',
      missingLetters: 'Заповнити пропущені літери',
      noWordFound: 'Слово не знайдено.',
      failedSearch: 'Помилка пошуку.'
    },

    ru: {
      title: 'Приложение для изучения немецкого',
      language: 'Язык',
      level: 'Уровень',
      germanEnglish: 'Немецкий → Английский',
      englishGerman: 'Английский → Немецкий',
      puzzle: 'Заполнить пропущенные буквы',
      score: 'Счёт',
      loading: 'Загрузка слова...',
      typeEnglish: 'Введите английское слово',
      typeGerman: 'Введите немецкое слово',
      check: 'Проверить',
      answer: 'Ответ',
      nextWord: 'Следующее слово',
      previousWord: 'Предыдущее слово',
      checkPuzzle: 'Проверить задание',
      wordEnglish: 'Английский',
      wordLevel: 'Уровень',
      wordType: 'Часть речи',
      correct: 'Правильно!',
      wrong: 'Неправильно!',
      tryAgain: 'Попробуйте ещё раз',
      translation: 'Перевод',
      searchPlaceholder: 'Поиск немецкого слова',
      search: 'Поиск',
      listen: 'Слушать',
      germanVocabulary: 'Немецкая лексика',
      germanToEnglish: 'Немецкий → Английский',
      englishToGerman: 'Английский → Немецкий',
      missingLetters: 'Заполнить пропущенные буквы',
      noWordFound: 'Слово не найдено.',
      failedSearch: 'Ошибка поиска.'
    },

    tr: {
      title: 'Almanca Öğrenme Uygulaması',
      language: 'Dil',
      level: 'Seviye',
      germanEnglish: 'Almanca → İngilizce',
      englishGerman: 'İngilizce → Almanca',
      puzzle: 'Eksik Harfleri Doldur',
      score: 'Puan',
      loading: 'Kelime yükleniyor...',
      typeEnglish: 'İngilizce kelimeyi yazın',
      typeGerman: 'Almanca kelimeyi yazın',
      check: 'Kontrol Et',
      answer: 'Cevap',
      nextWord: 'Sonraki Kelime',
      previousWord: 'Önceki kelime',
      checkPuzzle: 'Bulmacayı Kontrol Et',
      wordEnglish: 'İngilizce',
      wordLevel: 'Seviye',
      wordType: 'Kelime Türü',
      correct: 'Doğru!',
      wrong: 'Yanlış!',
      tryAgain: 'Tekrar deneyin',
      translation: 'Çeviri',
      searchPlaceholder: 'Almanca kelime ara',
      search: 'Ara',
      listen: 'Dinle',
      germanVocabulary: 'Almanca Kelime Bilgisi',
      germanToEnglish: 'Almanca → İngilizce',
      englishToGerman: 'İngilizce → Almanca',
      missingLetters: 'Eksik harfleri doldur',
      noWordFound: 'Kelime bulunamadı.',
      failedSearch: 'Arama başarısız.'
    }
  };

  t(key: string): string {
    return this.translations[this.uiLanguage]?.[key]
      || this.translations['en'][key]
      || key;
  }

  changeLanguage(language: string) {
    this.uiLanguage = language;
  }

  getWordTranslation(): string {
    if (!this.word) {
      return '';
    }

    switch (this.uiLanguage) {
      case 'ar':
        return this.word.arabic || '—';

      case 'uk':
        return this.word.ukrainian || '—';

      case 'ru':
        return this.word.russian || '—';

      case 'tr':
        return this.word.turkish || '—';

      case 'de':
        return this.word.german;

      case 'en':
      default:
        return this.word.english;
    }
  }

  getWordMeanings(): string[] {
    if (!this.word) {
      return [];
    }

    switch (this.uiLanguage) {

      case 'ar':
        return this.word.arabicMeanings || [];

      case 'uk':
        return this.word.ukrainianMeanings || [];

      case 'ru':
        return this.word.russianMeanings || [];

      case 'tr':
        return this.word.turkishMeanings || [];

      case 'de':
        return [this.word.german];

      case 'en':
      default:
        return this.word.englishMeanings || [];
    }
  }

  getSelectedLanguageName(): string {
    switch (this.uiLanguage) {
      case 'de':
        return 'Deutsch';

      case 'ar':
        return 'العربية';

      case 'uk':
        return 'Українська';

      case 'ru':
        return 'Русский';

      case 'tr':
        return 'Türkçe';

      case 'en':
      default:
        return 'English';
    }
  }

  mode: 'vocabulary' | 'german' | 'english' | 'puzzle' = 'vocabulary';
  level: 'B1' | 'B2' = 'B1';

  word: any;
  loading = false;

  score = 0;
  total = 0;

  userAnswer = '';
  result = '';

  userAnswerGerman = '';
  resultGerman = '';

  originalWord = '';
  displayWord: string[] = [];
  userInputs: string[] = [];

  searchText = '';

  previousWords: any[] = [];
  currentWordIndex = -1;

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
    this.loadWord();
  }

  loadWord() {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.result = '';
    this.resultGerman = '';

    const page = Math.floor(Math.random() * 10);

    this.http.get(
      `${environment.apiUrl}/api/word/level/${this.level}/page?page=${page}&size=20`
    ).subscribe({
      next: (data: any) => {

        const words = data?.content;

        if (!words || words.length === 0) {
          this.loading = false;
          this.result = `No ${this.level} words found.`;
          this.cd.detectChanges();
          return;
        }

        const newWord =
          words[Math.floor(Math.random() * words.length)];

        // Save the new word in history.
        // If we moved back and then request a new word,
        // remove the old "forward" history first.
        this.previousWords =
          this.previousWords.slice(0, this.currentWordIndex + 1);

        this.previousWords.push(newWord);

        this.currentWordIndex =
          this.previousWords.length - 1;

        this.showWord(newWord);

        this.loading = false;

        this.cd.detectChanges();
      },

      error: (error) => {
        console.error('Error loading word:', error);

        this.loading = false;
        this.result = `Failed to load word. Please try again.`;

        this.cd.detectChanges();
      }
    });
  }

  nextWord() {
    // If we already have a word ahead in history,
    // go to that word instead of creating a new one.
    if (this.currentWordIndex < this.previousWords.length - 1) {
      this.currentWordIndex++;

      this.showWord(
        this.previousWords[this.currentWordIndex]
      );

      this.cd.detectChanges();
      return;
    }

    // Otherwise load a completely new word.
    this.loadWord();
  }

  previousWord() {
    if (this.currentWordIndex <= 0) {
      return;
    }

    this.currentWordIndex--;

    this.showWord(
      this.previousWords[this.currentWordIndex]
    );

    this.cd.detectChanges();
  }

  showWord(word: any) {
    this.word = word;

    this.originalWord =
      this.word.german.toUpperCase();

    this.generatePuzzle();

    this.userInputs =
      new Array(this.originalWord.length).fill('');

    this.userAnswer = '';
    this.userAnswerGerman = '';

    this.result = '';
    this.resultGerman = '';
  }

  changeLevel(level: 'B1' | 'B2') {

    this.level = level;

    // Start a fresh history when changing level.
    this.previousWords = [];
    this.currentWordIndex = -1;

    this.loadWord();
  }

  speakGerman() {
    if (!this.word?.german) {
      return;
    }

    const speech = new SpeechSynthesisUtterance(this.word.german);

    speech.lang = 'de-DE';
    speech.rate = 0.85;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }
  checkAnswer() {
    if (!this.word) {
      return;
    }

    const correctAnswer = this.getWordTranslation()
      .trim()
      .toLowerCase();

    const userAnswer = this.userAnswer
      .trim()
      .toLowerCase();

    this.total++;

    if (userAnswer === correctAnswer) {
      this.score++;
      this.result = this.t('correct');
    } else {
      this.result =
        `${this.t('wrong')} ${this.t('answer')}: ${correctAnswer}`;
    }

    this.cd.detectChanges();
  }

  checkGermanAnswer() {
    if (!this.word) {
      return;
    }

    const correctAnswer = this.word.german
      .trim()
      .toLowerCase();

    const userAnswer = this.userAnswerGerman
      .trim()
      .toLowerCase();

    this.total++;

    if (userAnswer === correctAnswer) {
      this.score++;
      this.resultGerman = this.t('correct');
    } else {
      this.resultGerman =
        `${this.t('wrong')} ${this.t('answer')}: ${this.word.german}`;
    }

    this.cd.detectChanges();
  }

  generatePuzzle() {

    const word = this.originalWord;
    const length = word.length;

    if (length < 3) {
      this.displayWord = word.split('');
      return;
    }

    let blanksCount = length >= 6 ? 3 : 2;

    // Never request more blank positions than are available
    blanksCount = Math.min(blanksCount, length - 2);

    const result = word.split('');
    const positions: Set<number> = new Set();

    while (positions.size < blanksCount) {

      const index =
        Math.floor(Math.random() * (length - 2)) + 1;

      positions.add(index);
    }

    this.displayWord =
      result.map((char, index) =>
        positions.has(index) ? '_' : char
      );
  }

  checkPuzzle() {

    let finalWord = '';

    for (let i = 0; i < this.displayWord.length; i++) {

      if (this.displayWord[i] === '_') {

        finalWord +=
          (this.userInputs[i] || '').toUpperCase();

      } else {

        finalWord += this.displayWord[i];
      }
    }

    this.total++;

    if (finalWord === this.originalWord) {

      this.score++;
      this.result = this.t('correct');

    } else {

      this.result = this.t('tryAgain');
    }

    this.cd.detectChanges();
  }

  searchWord() {
    const search = this.searchText.trim();

    if (!search) {
      return;
    }

    this.loading = true;
    this.result = '';
    this.resultGerman = '';

    this.http
      .get<any[]>(
        `${environment.apiUrl}/api/word/search?german=${encodeURIComponent(search)}`
      )
      .subscribe({
        next: (words) => {

          if (!words || words.length === 0) {
            this.loading = false;
            this.result = `${this.t('noWordFound')} "${search}"`;
            this.cd.detectChanges();
            return;
          }

          // Search starts a new history.
          this.previousWords = [words[0]];
          this.currentWordIndex = 0;

          this.showWord(words[0]);

          // Show vocabulary mode after search.
          this.mode = 'vocabulary';

          this.loading = false;

          this.cd.detectChanges();
        },

        error: (error) => {
          console.error('Error searching word:', error);

          this.loading = false;
          this.result = this.t('failedSearch');

          this.cd.detectChanges();
        }
      });
  }

}