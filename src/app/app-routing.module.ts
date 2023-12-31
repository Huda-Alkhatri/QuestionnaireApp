

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: UserSelectorComponent },
  { path: 'question/:id', component: QuestionsComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
