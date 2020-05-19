import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AiComponent } from './components/pages/projects/ai/ai.component';
import { StemComponent } from './components/pages/projects/stem/stem.component';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects/ai',
    component: AiComponent
  },
  {
    path: 'projects/stem',
    component: StemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
