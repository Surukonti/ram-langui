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
    { code: 'fa', name: 'دری' },
    { code: 'tr', name: 'Türkçe' }
  ];

  translations: any = {
    en: {
      title: 'German Learning App', language: 'Language',
      germanVocabulary: 'German Vocabulary', puzzle: 'Fill Missing Letters',
      search: 'Search', searchPlaceholder: 'Search German word',
      listen: 'Listen', translation: 'Translation', meanings: 'Meanings',
      wordType: 'Word type', article: 'Article', plural: 'Plural',
      examples: 'Examples', verbForms: 'Verb Forms', level: 'Level',
      previousWord: 'Previous', nextWord: 'Next', checkPuzzle: 'Check Puzzle',
      correct: 'Correct!', tryAgain: 'Try again', loading: 'Loading...',
      noWordFound: 'Word not found.', failedSearch: 'Failed to search word.',
      infinitive: 'Infinitive', preterite: 'Präteritum', perfect: 'Perfekt',
      chat: 'Chat',
chatSuggestion: 'Ask anything about German, translations, grammar, or just have a conversation.',
chatPlaceholder: 'Ask anything...',
send: 'Send',
speak: 'Speak',
stop: 'Stop'
    },
    de: {
      title: 'Deutsch Lern-App', language: 'Sprache',
      germanVocabulary: 'Deutscher Wortschatz', puzzle: 'Fehlende Buchstaben',
      search: 'Suchen', searchPlaceholder: 'Deutsches Wort suchen',
      listen: 'Anhören', translation: 'Übersetzung', meanings: 'Bedeutungen',
      wordType: 'Wortart', article: 'Artikel', plural: 'Plural',
      examples: 'Beispiele', verbForms: 'Verbformen', level: 'Niveau',
      previousWord: 'Zurück', nextWord: 'Weiter', checkPuzzle: 'Rätsel prüfen',
      correct: 'Richtig!', tryAgain: 'Versuchen Sie es erneut',
      loading: 'Wird geladen...', noWordFound: 'Wort nicht gefunden.',
      failedSearch: 'Suche fehlgeschlagen.', infinitive: 'Infinitiv',
      preterite: 'Präteritum', perfect: 'Perfekt',
      chat: 'Chat',
chatSuggestion: 'Frage alles über Deutsch, Übersetzungen, Grammatik oder führe einfach ein Gespräch.',
chatPlaceholder: 'Frag mich etwas...',
send: 'Senden',
speak: 'Sprechen',
stop: 'Stopp'
    },
    ar: {
      title: 'تطبيق تعلم الألمانية', language: 'اللغة',
      germanVocabulary: 'المفردات الألمانية', puzzle: 'املأ الحروف الناقصة',
      search: 'بحث', searchPlaceholder: 'ابحث عن كلمة ألمانية',
      listen: 'استمع', translation: 'الترجمة', meanings: 'المعاني',
      wordType: 'نوع الكلمة', article: 'أداة التعريف', plural: 'الجمع',
      examples: 'أمثلة', verbForms: 'تصريفات الفعل', level: 'المستوى',
      previousWord: 'السابق', nextWord: 'التالي', checkPuzzle: 'تحقق',
      correct: 'صحيح!', tryAgain: 'حاول مرة أخرى', loading: 'جار التحميل...',
      noWordFound: 'الكلمة غير موجودة.', failedSearch: 'فشل البحث.',
      infinitive: 'المصدر', preterite: 'الماضي', perfect: 'Perfekt',
      chat: 'دردشة',
chatSuggestion: 'اسأل عن اللغة الألمانية أو الترجمات أو القواعد أو تحدث معي بشكل عادي.',
chatPlaceholder: 'اسأل عن أي شيء...',
send: 'إرسال',
speak: 'تحدث',
stop: 'إيقاف'
    },
    uk: {
      title: 'Застосунок для вивчення німецької', language: 'Мова',
      germanVocabulary: 'Німецька лексика', puzzle: 'Заповнити пропущені літери',
      search: 'Пошук', searchPlaceholder: 'Пошук німецького слова',
      listen: 'Слухати', translation: 'Переклад', meanings: 'Значення',
      wordType: 'Частина мови', article: 'Артикль', plural: 'Множина',
      examples: 'Приклади', verbForms: 'Форми дієслова', level: 'Рівень',
      previousWord: 'Назад', nextWord: 'Далі', checkPuzzle: 'Перевірити',
      correct: 'Правильно!', tryAgain: 'Спробуйте ще раз', loading: 'Завантаження...',
      noWordFound: 'Слово не знайдено.', failedSearch: 'Помилка пошуку.',
      infinitive: 'Інфінітив', preterite: 'Минулий час', perfect: 'Perfekt',
      chat: 'Чат',
chatSuggestion: 'Запитуйте про німецьку мову, переклади, граматику або просто спілкуйтеся.',
chatPlaceholder: 'Запитайте що завгодно...',
send: 'Надіслати',
speak: 'Говорити',
stop: 'Зупинити'
    },
fa: {
  title: 'برنامه یادگیری زبان آلمانی',
  language: 'زبان',
  germanVocabulary: 'واژگان آلمانی',
  puzzle: 'حروف گمشده را کامل کنید',
  search: 'جستجو',
  searchPlaceholder: 'یک کلمه آلمانی جستجو کنید',
  listen: 'گوش دادن',
  translation: 'ترجمه',
  meanings: 'معانی',
  wordType: 'نوع کلمه',
  article: 'آرتیکل',
  plural: 'جمع',
  examples: 'مثال‌ها',
  verbForms: 'شکل‌های فعل',
  level: 'سطح',
  previousWord: 'قبلی',
  nextWord: 'بعدی',
  checkPuzzle: 'بررسی',
  correct: 'درست!',
  tryAgain: 'دوباره تلاش کنید',
  loading: 'در حال بارگذاری...',
  noWordFound: 'کلمه پیدا نشد.',
  failedSearch: 'جستجو ناموفق بود.',
  infinitive: 'مصدر',
  preterite: 'گذشته ساده',
  perfect: 'Perfekt'
},
    tr: {
      title: 'Almanca Öğrenme Uygulaması', language: 'Dil',
      germanVocabulary: 'Almanca Kelime Bilgisi', puzzle: 'Eksik Harfleri Doldur',
      search: 'Ara', searchPlaceholder: 'Almanca kelime ara',
      listen: 'Dinle', translation: 'Çeviri', meanings: 'Anlamlar',
      wordType: 'Kelime Türü', article: 'Artikel', plural: 'Çoğul',
      examples: 'Örnekler', verbForms: 'Fiil biçimleri', level: 'Seviye',
      previousWord: 'Önceki', nextWord: 'Sonraki', checkPuzzle: 'Kontrol Et',
      correct: 'Doğru!', tryAgain: 'Tekrar deneyin', loading: 'Yükleniyor...',
      noWordFound: 'Kelime bulunamadı.', failedSearch: 'Arama başarısız.',
      infinitive: 'Mastar', preterite: 'Präteritum', perfect: 'Perfekt',
      chat: 'Sohbet',
chatSuggestion: 'Almanca, çeviriler, dilbilgisi hakkında her şeyi sorabilir veya sadece sohbet edebilirsiniz.',
chatPlaceholder: 'Her şeyi sor...',
send: 'Gönder',
speak: 'Konuş',
stop: 'Durdur'
    }
  };

 mode: 'vocabulary' | 'puzzle' | 'search' | 'chat' = 'vocabulary';

  word: any = null;
  loading = false;

  vocabularyHistory: any[] = [];
  vocabularyIndex = -1;

  puzzleHistory: string[] = [];
  puzzleIndex = -1;

  puzzleWord = '';
  displayWord: string[] = [];
  userInputs: string[] = [];
  puzzleResult = '';
  puzzleInfo: any = null;
  private wordInfoCache = new Map<string, any>();

  searchText = '';
  searchLoading = false;
  searchResult: any = null;
  searchError = '';

  chatInput = '';
chatMessages: { role: 'user' | 'assistant'; text: string }[] = [];
chatLoading = false;

isListening = false;
spokenText = '';
private recognition: any;

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {
    this.loadVocabulary();
  }

  t(key: string): string {
    return this.translations[this.uiLanguage]?.[key]
      || this.translations.en[key]
      || key;
  }

  changeLanguage(language: string) {
    this.uiLanguage = language;

    // Reuse cached AI data when possible; otherwise translate the current word once.
    if (this.word?.german) {
      this.loadAiWord(this.word.german, false);
    }

    if (this.mode === 'puzzle' && this.puzzleResult && this.puzzleWord) {
      this.loadAiWord(this.puzzleWord, true);
    }
  }

selectMode(mode: 'vocabulary' | 'puzzle' | 'search' | 'chat') {
    this.mode = mode;
    this.loading = false;
    this.searchError = '';
    this.puzzleResult = '';

    if (mode === 'vocabulary' && !this.word) {
      this.loadVocabulary();
    }

    if (mode === 'puzzle' && !this.puzzleWord) {
      this.loadPuzzle();
    }
  }

  private loadAiWord(germanWord: string, puzzle = false) {
  const language = this.getSelectedLanguageName();
  const key = germanWord.trim().toLowerCase() + '|' + language;

  const cached = this.wordInfoCache.get(key);

  if (cached) {
    if (puzzle) {
      this.puzzleInfo = cached;
    } else {
      this.word = { ...this.word, ...cached, german: germanWord };
    }

    this.cd.detectChanges();
    return;
  }

  this.http.post<any>(`${environment.apiUrl}/api/ai/word`, {
    germanWord,
    targetLanguage: language
  }).subscribe({
    next: result => {
      const info = {
        ...result,
        german: result.germanWord || germanWord,
        meanings: Array.isArray(result.meanings) ? result.meanings : []
      };

      this.wordInfoCache.set(key, info);

      if (puzzle) {
        this.puzzleInfo = info;
      } else {
        this.word = { ...this.word, ...info, german: germanWord };
      }

      this.cd.detectChanges();
    },
    error: err => {
      console.error('AI word information error:', err);
      this.cd.detectChanges();
    }
  });
}

  loadVocabulary() {
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/api/random/vocabulary`).subscribe({
      next: word => {
        this.word = word;
        this.vocabularyHistory = [word];
        this.vocabularyIndex = 0;
        this.loadAiWord(word.german);
        this.loading = false;
        this.cd.detectChanges();
      },
      error: err => {
        console.error(err);
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }

  nextVocabulary() {
    if (this.vocabularyIndex < this.vocabularyHistory.length - 1) {
      this.vocabularyIndex++;
      this.word = this.vocabularyHistory[this.vocabularyIndex];
      return;
    }

    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/api/random/vocabulary`).subscribe({
      next: word => {
        this.vocabularyHistory.push(word);
        this.vocabularyIndex++;
        this.word = word;
        this.loadAiWord(word.german);
        this.loading = false;
        this.cd.detectChanges();
      },
      error: err => {
        console.error(err);
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }

  previousVocabulary() {
    if (this.vocabularyIndex <= 0) return;
    this.vocabularyIndex--;
    this.word = this.vocabularyHistory[this.vocabularyIndex];
    this.loadAiWord(this.word.german);
  }

  loadPuzzle() {
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/api/random/puzzle`).subscribe({
      next: data => {
        this.setPuzzleWord(data.german);
        this.puzzleHistory = [data.german];
        this.puzzleIndex = 0;
        this.loading = false;
        this.cd.detectChanges();
      },
      error: err => {
        console.error(err);
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }

  nextPuzzle() {
    if (this.puzzleIndex < this.puzzleHistory.length - 1) {
      this.puzzleIndex++;
      this.setPuzzleWord(this.puzzleHistory[this.puzzleIndex]);
      return;
    }

    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/api/random/puzzle`).subscribe({
      next: data => {
        this.puzzleHistory.push(data.german);
        this.puzzleIndex++;
        this.setPuzzleWord(data.german);
        this.loading = false;
        this.cd.detectChanges();
      },
      error: err => {
        console.error(err);
        this.loading = false;
        this.cd.detectChanges();
      }
    });
  }

  previousPuzzle() {
    if (this.puzzleIndex <= 0) return;
    this.puzzleIndex--;
    this.setPuzzleWord(this.puzzleHistory[this.puzzleIndex]);
  }

  setPuzzleWord(german: string) {
    this.puzzleWord = german;
    this.puzzleInfo = null;
    const chars = german.split('');
    this.userInputs = new Array(chars.length).fill('');
    this.puzzleResult = '';

    if (chars.length < 3) {
      this.displayWord = chars;
      return;
    }

    const blanks = Math.min(chars.length >= 6 ? 3 : 2, chars.length - 2);
    const positions = new Set<number>();

    while (positions.size < blanks) {
      positions.add(Math.floor(Math.random() * (chars.length - 2)) + 1);
    }

    this.displayWord = chars.map((char, i) =>
      positions.has(i) ? '_' : char
    );
  }

  checkPuzzle() {
    let answer = '';

    for (let i = 0; i < this.displayWord.length; i++) {
      answer += this.displayWord[i] === '_'
        ? (this.userInputs[i] || '')
        : this.displayWord[i];
    }

    if (answer.toLowerCase() === this.puzzleWord.toLowerCase()) {
      this.puzzleResult = this.t('correct');
      this.puzzleInfo = null;
    } else {
      this.puzzleResult = this.t('tryAgain');
      this.loadAiWord(this.puzzleWord, true);
    }

    this.cd.detectChanges();
  }

  searchWord() {
    const germanWord = this.searchText.trim();
    if (!germanWord) return;

    this.searchLoading = true;
    this.searchError = '';
    this.searchResult = null;

    this.http.post<any>(`${environment.apiUrl}/api/ai/word`, {
      germanWord,
      targetLanguage: this.uiLanguage === 'de' ? 'German' : this.getSelectedLanguageName()
    }).subscribe({
      next: result => {
        this.searchResult = this.normalizeSearchResult(result);
        this.searchLoading = false;
        this.mode = 'search';
        this.cd.detectChanges();
      },
      error: err => {
        console.error(err);
        this.searchLoading = false;
        this.searchError = this.t('failedSearch');
        this.cd.detectChanges();
      }
    });
  }

  normalizeSearchResult(result: any) {
    const meanings = Array.isArray(result?.meanings)
      ? result.meanings
      : result?.meaning
        ? [result.meaning]
        : result?.translation
          ? [result.translation]
          : [];

    return {
      ...result,
      meanings,
      examples: Array.isArray(result?.examples) ? result.examples : [],
      verbForms: result?.verbForms || null
    };
  }

getSelectedLanguageName(): string {
  switch (this.uiLanguage) {
    case 'de': return 'German';
    case 'uk': return 'Ukrainian';
    case 'tr': return 'Turkish';
    case 'ar': return 'Arabic';
    case 'fa': return 'Dari';
    case 'en':
    default: return 'English';
  }
}

 startSpeaking() {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    this.searchError = 'Speech recognition is not supported in this browser.';
    return;
  }

  // Stop any previous recognition session
  if (this.recognition) {
    try {
      this.recognition.stop();
    } catch {}
  }

  this.recognition = new SpeechRecognition();

  this.recognition.lang = this.getSpeechLanguage();
  this.recognition.continuous = true;
  this.recognition.interimResults = true;

  // IMPORTANT: every new speech session starts fresh
  let finalTranscript = '';

  this.chatInput = '';

  this.recognition.onstart = () => {
    this.isListening = true;
    this.cd.detectChanges();
  };

  this.recognition.onresult = (event: any) => {

    let interimTranscript = '';

    // Only process the results that changed
    for (
      let i = event.resultIndex;
      i < event.results.length;
      i++
    ) {
      const transcript =
        event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      } else {
        interimTranscript += transcript;
      }
    }

    this.chatInput =
      (finalTranscript + interimTranscript).trim();

    this.cd.detectChanges();
  };

  this.recognition.onerror = (event: any) => {
    console.error('Speech recognition error:', event);

    this.isListening = false;
    this.cd.detectChanges();
  };

  this.recognition.onend = () => {
    this.chatInput = finalTranscript.trim();
    this.isListening = false;
    this.cd.detectChanges();
  };

  this.recognition.start();
}

stopSpeaking() {
  if (this.recognition) {
    this.recognition.stop();
  }

  this.isListening = false;
  this.cd.detectChanges();
}


getSpeechLanguage(): string {
  switch (this.uiLanguage) {
    case 'de': return 'de-DE';
    case 'ar': return 'ar-SA';
    case 'uk': return 'uk-UA';
    case 'ru': return 'ru-RU';
    case 'tr': return 'tr-TR';
    case 'en':
    default: return 'en-US';
  }
}

sendChatMessage() {
  const message = this.chatInput.trim();

  if (!message || this.chatLoading) {
    return;
  }

  this.chatMessages.push({
    role: 'user',
    text: message
  });

  this.chatInput = '';
  this.chatLoading = true;

  this.http.post<any>(`${environment.apiUrl}/api/ai/chat`, {
    message,
    language: this.getSelectedLanguageName()
  }).subscribe({
    next: (result) => {
      this.chatMessages.push({
        role: 'assistant',
        text: result.response
      });

      this.chatLoading = false;
      this.cd.detectChanges();
    },
    error: (error) => {
      console.error('Chat error:', error);

      this.chatMessages.push({
        role: 'assistant',
        text: 'Sorry, I could not get a response.'
      });

      this.chatLoading = false;
      this.cd.detectChanges();
    }
  });
}

  speakGerman(word: string = '') {
    const text = word || this.word?.german || this.searchResult?.germanWord;
    if (!text) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'de-DE';
    speech.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }
}
