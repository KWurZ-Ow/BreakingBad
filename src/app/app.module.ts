import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { CharacterRepositoryService } from './services/character-repository.service';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllCharactersComponent,
    SingleCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CharacterRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
