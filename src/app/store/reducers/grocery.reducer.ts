import { createReducer, on } from "@ngrx/store"
import { Grocery } from "../../../models/grocery.model"
import { groceryAction } from "../actions/grocery.action"

// const initialState=[
//     {"id":1,"name":"milk","type":"fruit"},
//     {"id":2,"name":"mango","type":"fruit"},
//     {"id":3,"name":"banana","type":"snacks"},
//     {"id":4,"name":"chips ","type":"snacks"}
// ]
const initialState:Grocery[]=[]

// here we are creating reducer
export const groceryReducer=createReducer(initialState,
    on(groceryAction.loadGroceriesSuccess,(state,action)=>{
        return action.payload
    }),
    on(groceryAction.loadGroceriesFailure,(state,action)=>{
        return []
    })
)