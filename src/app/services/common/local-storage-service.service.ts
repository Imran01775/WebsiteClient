import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LocalStorageService {
  key;
  constructor(private keyName: string) { 
    this.key  = keyName;
  }

  
  removeItemFromStorage() {
    localStorage.removeItem(this.key);
  }
  
  setItemInStorage(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  getItemFromStorage() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  isItemExistInStorage() {
    return localStorage.getItem(this.key) != null;
  }
  // redirectToLogin() {
  //   this.router.navigate(['/login'])
  // }

}
