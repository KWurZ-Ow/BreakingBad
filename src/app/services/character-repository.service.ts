import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterRepositoryService {

  constructor(private httpClient: HttpClient) {}

  getCharacters(){
  
    return this.httpClient.get<any[]>('https://www.breakingbadapi.com/api/characters')
    
  };
  getCharacter(id:number){
  
    return this.httpClient.get<any[]>(`https://www.breakingbadapi.com/api/characters/${id}`)
    
  };

}

