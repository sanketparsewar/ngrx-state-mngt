import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const addToBucket = createAction(
    //   here in quotes and square bracket we have to declare which state we have to use
    '[Bucket] Add',
    props<{ payload: Bucket }>()   //parameter is the data that we want to send and its type
)

export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<{ payload: Partial<Bucket> }>()  //this means partial data of bucket
)