import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { character } from "../../models/character.model";


@Injectable({providedIn: 'root',
  })

export class SmtApiService {
    constructor (
        private http : HttpClient
    ){}

    getCharacterByName(title: string):Observable<character[]> {
        return this.http.get<character[]>(`${environment.smtApiBase}?name=${title}`);
    }


    
}