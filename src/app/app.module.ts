import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';

import { GMapModule } from 'primeng/gmap';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { InstructionsComponent } from './instructions/instructions.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { GameModeComponent } from './game-mode/game-mode.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InstructionsComponent,
    GameSettingsComponent,
    GameModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GMapModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
