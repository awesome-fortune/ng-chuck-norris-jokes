import { createAction, props } from '@ngrx/store';
import { Joke } from '../models/joke.model';

export const enterHomePage = createAction('[Home Page] Enter');

export const loadCategoriesSuccess = createAction('[API] Load categories success', props<{ categories: string[] }>());
export const loadCategoriesFailure = createAction('[API] Load categories failure', props<{ errorMessage: string }>());

export const loadJoke = createAction('[Joke container] Load joke', props<{ selectedCategory: string }>());
export const loadJokeSuccess = createAction('[API] Load joke success', props<{ joke: Joke }>());
export const loadJokeFailure = createAction('[API] Load joke failure', props<{ errorMessage: string }>());

export const setSelectedCategory = createAction(
  '[NavBar] Set selected category',
  props<{ selectedCategory: string }>()
);
