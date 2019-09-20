import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameModeComponent } from './game-mode/game-mode.component';


const routes: Routes = [
  {path: 'game-mode', component: GameModeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
