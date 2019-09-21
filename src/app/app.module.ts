import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { CardModule } from 'primeng/card';
import { GMapModule } from 'primeng/gmap';
import { firebaseConfig } from '../environments/firebase-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengePopupComponent } from './challenge-popup/challenge-popup.component';
import { DefinedGamesAccordionComponent } from './defined-games-accordion/defined-games-accordion.component';
import { FinishComponent } from './finish/finish.component';
import { GameModeComponent } from './game-mode/game-mode.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AuthService } from './services/auth.service';
import { SharedModule } from './shared/shared.module';

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
    CardModule,
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
