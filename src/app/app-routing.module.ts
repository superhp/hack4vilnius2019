import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameModeComponent } from './game-mode/game-mode.component';
import { InstructionsComponent } from 'src/app/instructions/instructions.component';


const routes: Routes = [
  {path: 'game-mode', component: GameModeComponent},
  {path: 'instructions', component: InstructionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
