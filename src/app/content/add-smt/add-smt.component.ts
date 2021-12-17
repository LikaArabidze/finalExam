import { Component, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from 'src/app/services';
import { FireApiService } from 'src/app/services/fire-api.service';
import { character, characterView } from '../models/character.model';
import { Character } from '../models/smt.model';
import { AddSmtFacade } from './add-smt.facade';
import { AddSmtStorage } from './add-smt.storage';

@Component({
  selector: 'app-add-smt',
  templateUrl: './add-smt.component.html',
  styleUrls: ['./add-smt.component.scss'],
  
})
export class AddSmtComponent implements OnInit {

  searchKey: string = '';

  review: string= '';

  stars:  number[];

  rating: number;


  selectedCharacter$: Observable<character[]> | null = null;


  searchHasError = false;

  formHasError = false;

  isLoading = false;

  selectedCharacterId : number;

  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  constructor(
    private facade: AddSmtFacade,
    private fireapiservice: FireApiService,
    private loadingService: LoadingService,
  ) { }

  search(){
    if (!this.searchKey) {
      this.searchHasError= true;
      return;
    }

    this.searchHasError = false;

    this.facade.addToLastSearches(this.searchKey);
    this.fetchCharacter(this.searchKey)
    
  }
  
  rate(rating: number){
    this.rating=rating;
  
  }

  addCharacter(character: character ){ 
    
    if(!character.review || character.review.length<10){
      this.formHasError=true;
      this.selectedCharacterId=character.char_id
      return;
    }
    this.isLoading =true
    this.fireapiservice.addFavorite(character)
    .pipe(finalize(()=> this.isLoading=false))
    .subscribe();
    
  }

  disableButton(character: character){
    
    return !character.review||(document.getElementById(`${character.char_id}`) as HTMLInputElement).classList.contains("invalid")
    
  }

  fetchCharacter(title: string){
   this.selectedCharacter$ = this.facade.fetchCharacter(title)
  }


  ngOnInit() {
    this.facade.restoreState();
    this.stars=Array(5).fill(0).map((x,i)=>i+1);
  }

}

 