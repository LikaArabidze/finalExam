import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SignInForm, SignUpForm } from '../auth';

interface User {
  uid: string | null | undefined;
  email: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | null = null;

  get isLoggedIn(): boolean {
    return !!this._user;
  }

  get userId() {
    return this._user?.uid;
  }

  constructor(private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this._user = {
          email: user?.email,
          uid: user?.uid,
        };

        return;
      }

      this._user = null;
    });
  }

  signIn({ email, password }: SignInForm) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUp({ email, password }: SignUpForm) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }
}
