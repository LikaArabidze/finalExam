import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  get<T>(key: string): T | undefined {
    const item = localStorage.getItem(key);

    if (!item) {
      return;
    }

    return JSON.parse(item);
  }

  set<T>(key: string, arg: T) {
    localStorage.setItem(key, JSON.stringify(arg));
  }
}
