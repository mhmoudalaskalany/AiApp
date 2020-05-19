import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'core/services/localization/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslationService) { }

  ngOnInit() {
  }

  setLanguage(lang: string): void {
    this.translate.setLanguage(lang);
  }

}
