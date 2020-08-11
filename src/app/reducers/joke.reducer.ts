import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Joke } from '../models/joke.model';
import * as fromAppActions from '../actions/app.actions';
import * as fromRoot from './index';

export const jokeFeatureKey = 'joke';

export interface State {
  joke: Joke;
  loading: boolean;
}

export const initialState: State = {
  joke: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(fromAppActions.loadJoke, fromAppActions.setSelectedCategory, (state) => ({ ...state, loading: true })),
  on(fromAppActions.loadJokeSuccess, (state, { joke }) => ({ ...state, joke, loading: false }))
);

const selectJoke = createFeatureSelector<fromRoot.State, State>(jokeFeatureKey);
export const selectJokeValue = createSelector(selectJoke, (state: State) => state.joke);
export const selectJokeLoading = createSelector(selectJoke, (state: State) => state.loading);
