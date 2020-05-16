import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { ProjectComponent } from './components/layout/project/project.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { AiComponent } from './components/pages/projects/ai/ai.component';
import { MlComponent } from './components/pages/projects/ml/ml.component';
import { StemComponent } from './components/pages/projects/stem/stem.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MainComponent,
    ProjectComponent,
    ContactComponent,
    AiComponent,
    MlComponent,
    StemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
