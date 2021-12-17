import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from 'src/app/services';
import { FireApiService } from 'src/app/services/fire-api.service';
import { character, characterWithId } from '../models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

public characterList: characterWithId[]

  constructor(
    private loadingService: LoadingService,
     private FireApiService: FireApiService) { 

     }

  ngOnInit() {
    this.loadingService.start()
    this.getCharacters();
    

  }

  getCharacters(){
    this.FireApiService.getCharacters()
    .pipe(finalize(()=> this.loadingService.stop()))
    .subscribe((response => this.characterList = response));
    
  }


  

}
