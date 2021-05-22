import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScoreComponent } from './add-score/add-score.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { HistoryComponent } from './history/history.component';
// import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: "create-game",
    component:CreateGameComponent
  },
  {
    path: "add-score",
    component: AddScoreComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  { path: '',   redirectTo: 'create-game', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
