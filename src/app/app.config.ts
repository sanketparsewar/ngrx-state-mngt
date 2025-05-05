import { ApplicationConfig, provideZoneChangeDetection, provideExperimentalZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { groceryReducer } from './store/reducers/grocery.reducer';
import { bucketReducer } from './store/reducers/bucket.reducer';
import { GroceriesEffects } from './store/effects/grocery.effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({
      groceries:groceryReducer,
      myBucket:bucketReducer
    }),
    provideEffects(GroceriesEffects),
    provideStoreDevtools({
      maxAge:25,   //reatains last 25 states
      logOnly:!isDevMode(),  //restrict extension to log only node
      autoPause:true,      // pauses recording action and state changes 
      trace:false,    //if set to true , will include stack trace for evry dispatch
      traceLimit:75,    //maximum stack trace frames to be stored 
      connectInZone:true   //if set to true the connection is established with in 
    })
    
  ]
};
