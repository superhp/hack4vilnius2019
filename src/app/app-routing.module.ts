import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameModeComponent } from './game-mode/game-mode.component';
import { InstructionsComponent } from 'src/app/instructions/instructions.component';
import { GameSettingsComponent } from 'src/app/game-settings/game-settings.component';
import { MapComponent } from 'src/app/map/map.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'game-mode', component: GameModeComponent},
  {path: '',   redirectTo: '/game-mode', pathMatch: 'full'},
  {path: 'game-settings/:mode', component: GameSettingsComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
