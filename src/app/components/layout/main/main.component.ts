import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'core/services/localization/translation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lang: string;
  constructor(private translate: TranslationService) {
    this.lang = this.translate.lang;
    console.log(this.lang);
  }

  ngOnInit() {
  }

}
