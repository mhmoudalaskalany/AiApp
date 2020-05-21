import { Injectable, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})

/**
 * Auth Services
 * the main service for authentications
 */
export class TranslationService {
  langs = ['en', 'ar'];
  lang;
  renderer;
  constructor(private translate: TranslateService, private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.lang = localStorage.getItem('language') != null ? localStorage.getItem('language') : 'en';
  }

  setDefaultLanguage() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang === undefined ? 'en' : this.lang);
  }

  useLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  setLanguage(lang: string) {
    if (lang === 'ar') {
      this.renderer.addClass(document.body, 'rtl');
    } else {
      this.renderer.removeClass(document.body, 'rtl');
    }
    this.translate.use(lang);
  }

  isEnglish(): boolean {
    const currentLang = this.translate.currentLang;
    if (currentLang === 'en') {
      return true;
    } else {
      return false;
    }
  }
}
