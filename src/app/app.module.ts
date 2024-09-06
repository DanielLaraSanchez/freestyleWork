import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BattlefieldPageComponent } from './pages/battlefield-page/battlefield-page.component';
import { CurrentBattlesComponent } from './components/current-battles/current-battles.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    BattlefieldPageComponent,
    CurrentBattlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }