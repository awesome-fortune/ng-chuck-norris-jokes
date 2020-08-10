import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Joke } from '../models/joke.model';
import * as fromAppActions from '../actions/app.actions';
import * as fromRoot from './index';

export const jokeFeatureKey = 'joke';

export interface State {
  joke: Joke;
}

export const initialState: State = {
  joke: null,
};

export const reducer = createReducer(
  initialState,
  on(fromAppActions.loadJokeSuccess, (state, { joke }) => ({ ...state, joke }))
);

const selectJoke = createFeatureSelector<fromRoot.State, State>(jokeFeatureKey);
export const selectJokeValue = createSelector(selectJoke, (state: State) => state.joke);
