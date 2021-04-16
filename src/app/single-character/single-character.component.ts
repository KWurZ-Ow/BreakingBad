import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterRepositoryService } from '../services/character-repository.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  character$?: Observable<any>;

  constructor(private CharacterRepositoryService: CharacterRepositoryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.character$ = this.CharacterRepositoryService.getCharacter(this.activatedRoute.snapshot.params.id);
    
  }

}
