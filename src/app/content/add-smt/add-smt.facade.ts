import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs/internal/Subject";
import { finalize, map } from "rxjs/operators";
import { LoadingService } from "src/app/services/loading.service";
import { character, characterView } from "../models/character.model";
import { AddSmtStorage } from "./add-smt.storage";
import { SmtApiService } from "./services";

@Injectable({providedIn: 'root',
  })
export class AddSmtFacade {
    
    get lastThreeSearches():string [] {
        return this.storage.lastThreeSearches
    }

    constructor (
        private SmtApiService: SmtApiService,
        private router: Router,
        private loadingService : LoadingService,
        private storage: AddSmtStorage
    ){}
    
    
    public character: Subject<character>=  new Subject<character>();

    public fetchCharacter(title:string){
        this.loadingService.start();

       return this.SmtApiService.getCharacterByName(title)
        //  ((character)=>({title: character.name, imgUrl: character.img}))
        
        .pipe(finalize(() => this.loadingService.stop()))
    }

    addToLastSearches(key: string) {
        this.storage.addToLastSearches(key);
      }

        restoreState() {
            this.storage.restoreState();
        }
}



//.subscribe((character) =>this.router.navigate(["content/add"], {state:{data:character[0]}}))};

