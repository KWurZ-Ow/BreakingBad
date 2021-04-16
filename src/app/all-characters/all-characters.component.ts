import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterRepositoryService } from '../services/character-repository.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  characters$?: Observable<any>;
  rechercheNom: String = '';
  rechercheStatus:String = 'All';
  recherchePseudo:String = '';

  constructor(private CharacterRepositoryService: CharacterRepositoryService) {}

  resetAll(){
    this.rechercheNom = '';
    this.rechercheStatus = 'All';
    this.recherchePseudo = '';
  }
  resetName(){
    this.rechercheNom = '';
  }
  resetPseudo(){
    this.recherchePseudo = '';
  }
  
  ngOnInit(): void {
    
    this.characters$ = this.CharacterRepositoryService.getCharacters();
    
  }
  
}
