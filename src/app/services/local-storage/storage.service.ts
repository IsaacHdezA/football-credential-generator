import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  get(key: string): any {
    const item = localStorage.getItem(key);
    if (!item) return undefined;
    // if (!item) throw new Error(`Unexistant item with key "${key}"`);

    return JSON.parse(item);
  }

  set(key: string, item: any): void {
    if (typeof item != "string") item = JSON.stringify(item);
    localStorage.setItem(key, item);

    return;
  }

  append(key: string, item: any): void {
    const value = this.get(key);

    if (!value) {
      this.set(key, item);
      return;
    }

    this.set(key, { ...item, ...value });
    return;
  }

  remove(key: string): void {
    localStorage.removeItem(key);

    return;
  }
}
