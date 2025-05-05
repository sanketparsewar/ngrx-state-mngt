import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grocery } from '../models/grocery.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  // constructor(private http:HttpClient) {}

  private groceries: Grocery[] = [
    { id: 1, name: 'milk', type: 'fruit' },
    { id: 2, name: 'mango', type: 'fruit' },
    { id: 3, name: 'banana', type: 'snacks' },
    { id: 4, name: 'chips', type: 'snacks' }
  ];

  constructor() {}

  fetchAllGroceries(): Observable<Grocery[]> {
    return of(this.groceries);    //converting the object into the observable type data
  }
}
