import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryAction } from '../actions/grocery.action';

@Injectable()
export class GroceriesEffects {
    // this is observable value will get available after some delay
    private actions$ = inject(Actions);
    private groceryService = inject(GroceryService);

    //   we are dispatching the groceryAction.loadGroceries in the app.component.ts
    loadGroceries$ = createEffect(() => {
        return this.actions$.pipe(           //once the action is dispatch then the below code runs
            ofType(groceryAction.loadGroceries), //we we want to access type dont give '()'
            // if we want to dispatch then we have to give '()'
            exhaustMap(() => this.groceryService.fetchAllGroceries()  // again this is observable and we have to transform data
                .pipe(      //we are using pipe to transform data and map to transform each value
                    map((groceries: any) => (groceryAction.loadGroceriesSuccess({ payload: groceries }))),
                    // catchError expect to return observable so
                    // so we are using 'of' to convert an object to observable
                    catchError(() => of(groceryAction.loadGroceriesFailure()))
                )
            )
        );
    });
}

// now we have to listem action in reducer