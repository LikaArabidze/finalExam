import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { AuthService } from '.';
import { character, characterWithId } from '../content/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  firestore: any;

  constructor(private store: AngularFirestore, private auth: AuthService) {}

  addFavorite(character: character) {
    character.uid = this.auth.userId;
    return from(this.store.collection('Characters').add(character))
    
  }

  getCharacters(): Observable<characterWithId[]> {
    return this.store
      .collection<character>('Characters', (ref) =>
        ref.where('uid', '==', this.auth.userId)
      )
      .get()
      .pipe(
        map((result) => result.docs.map((d) => ({ ...d.data(), id: d.id })))
      );
  }

  getCharacter(id: string): Observable<character | undefined> {
    return this.store
      .collection<character>('Characters', (ref) =>
        ref.where('uid', '==', this.auth.userId)
      )
      .doc(id)
      .get()
      .pipe(map((res) => res.data()));
  }

  deleteCharacter(id:string){
    return this.store
    .collection('Characters', (ref) =>
      ref.where('uid', '==', this.auth.userId))
      .doc(id)
      .delete()
      
    
  }

}

// this.firestore
//     .collection("Characters")
//     .get()
//     .subscribe(console.log);
