import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GMapModule } from 'primeng/gmap';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

import { firebaseConfig } from '../environments/firebase-config';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { MapComponent } from './map/map.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { GameModeComponent } from './game-mode/game-mode.component';

import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DefinedGamesAccordionComponent } from './defined-games-accordion/defined-games-accordion.component';

import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { FinishComponent } from './finish/finish.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ChallengePopupComponent } from './challenge-popup/challenge-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InstructionsComponent,
    GameSettingsComponent,
    GameModeComponent,
    DefinedGamesAccordionComponent,
    LoginComponent,
    FinishComponent,
    LeaderboardComponent,
    ChallengePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GMapModule,
    FlexLayoutModule,
    SharedModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
