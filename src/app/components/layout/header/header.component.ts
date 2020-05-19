import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'core/services/localization/translation.service';
import { StorageService } from 'core/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslationService, private storage: StorageService) {
    console.log('language at home', this.translate.lang);
  }

  ngOnInit() {
  }

  setLanguage(lang: string): void {
    this.translate.setLanguage(lang);
    this.storage.setItem('language', lang);
  }

}
