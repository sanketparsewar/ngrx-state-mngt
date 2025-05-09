import { createReducer, on } from "@ngrx/store"
import { Bucket } from "../../../models/bucket.model"
import { addToBucket, removeFromBucket } from "../actions/bucket.action"

const initialState: Bucket[] = []


// here we have to listen to the action 
export const bucketReducer = createReducer(
    initialState,
    on(addToBucket, (state, action) => {    //what ever the value gets return it is our new state value
        const bucketItem = state.find((item => item.id === action.payload.id))
        if (bucketItem) {
            return state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item)
        }
        else {

            return [...state,      //keeping the initial data and adding the payload of action
            action.payload
            ]
        }
    }),
    on(removeFromBucket,(state,action)=>{
        const bucketItem=state.find(item=>item.id=== action.payload.id)
        if(bucketItem && bucketItem.quantity > 1){
            return state.map((item)=>item.id===action.payload.id? {...item,quantity:item.quantity- 1}: item )
        }else{
            return state.filter(item=>item.id!==action.payload.id)
        }
    })
)