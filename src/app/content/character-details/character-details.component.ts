import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services';
import { FireApiService } from 'src/app/services/fire-api.service';
import {  AddSmtFacade } from '../add-smt/add-smt.facade';
import { character } from '../models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  public character$ : Observable<character | undefined>;
  

  constructor(
    private addSmtFacade : AddSmtFacade,
    private activatedRoute: ActivatedRoute,
    private fireApiService: FireApiService,
    private loadingService: LoadingService,
    private router: Router
  ) {

   }


  ngOnInit() {

    this.getCharacter()
    
  }

  getCharacter(){
    const id = this.activatedRoute.snapshot.params['id'];

    this.loadingService.start();
    this.character$=this.fireApiService.getCharacter(id)
    .pipe(
      finalize(() => this.loadingService.stop()))
  }

  goBack(){
    this.router.navigate(["../../"])
  }

  
}
