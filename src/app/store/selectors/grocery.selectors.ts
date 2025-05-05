// main use of selector is to transform the data before using it

import { Grocery } from "../../../models/grocery.model";
import { createFeatureSelector, createSelector } from '@ngrx/store';


// both the ways of writing selector are correct
// export const selectGroceries=(state:{groceries:Grocery[]})=>state.groceries
export const selectGroceries=createFeatureSelector<Grocery[]>('groceries')


export const selectGroceryByType = (type: string) => createSelector(
    selectGroceries, (state) => {
        return state.filter((item) => item.type === type)

    }
)

