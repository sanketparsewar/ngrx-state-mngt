import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store"
import { Grocery } from "../../../models/grocery.model"


// in [] bracket we have mentioned state or origin
// export const initGroceries= createAction('[Grocery] Load Groceries')

// export const completedGroceries=createAction('[Grocery] Load Groceries success')


// creating the group of action
export const groceryAction=createActionGroup({
    source:"Grocery Api",
    events:{
        'Load groceries':emptyProps(),
        'Load groceries Success':props<{payload:Grocery[]}>(),
        'Load groceries Failure':emptyProps()
    }
})
