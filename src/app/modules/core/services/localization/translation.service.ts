import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})

/**
 * Auth Services
 * the main service for authentications
 */
export class TranslationService {
  langs = ['en', 'fr'];
  lang;
  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('language') != null ? localStorage.getItem('language') : 'en';
  }

  setDefaultLanguage() {
    this.translate.addLangs(['en', 'fr', 'ar']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  useLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }
}
