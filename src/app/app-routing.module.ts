import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameModeComponent } from './game-mode/game-mode.component';
import { InstructionsComponent } from 'src/app/instructions/instructions.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';


const routes: Routes = [
  {path: 'game-mode', component: GameModeComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'game-settings', component: GameSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
