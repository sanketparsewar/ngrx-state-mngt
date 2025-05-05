import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectGroceries, selectGroceryByType } from '../../store/selectors/grocery.selectors';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?: Observable<Grocery[]>=this.store.select(selectGroceries)
  filterGroceries$?: Observable<Grocery[]>;
  // to use the reducer we have to inject the store
  constructor(private store: Store<{ groceries: Grocery[] }>) {
    // what ever we select here is observable
  }



  onTypeChange(event: Event) {
    const selectedType = (event.target as HTMLInputElement).value;
    if (selectedType)
      this.filterGroceries$ = this.store.select(selectGroceryByType(selectedType));
    else 
    this.filterGroceries$=undefined
  }


  increment(item: Grocery) {
    const payload = {
      id: item.id,
      name: item.name,
      quantity: 1
    }
    // when we dispatch addToBucket this action should go to the bucketReducer and bucketReducer should listen this action
    this.store.dispatch(addToBucket({ payload }))


  }
  decrement(item: Grocery) {
    const payload = {
      id: item.id,
      name: item.name
    }
    this.store.dispatch(removeFromBucket({ payload }))

  }

}
