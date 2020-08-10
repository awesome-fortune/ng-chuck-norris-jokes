import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCategory from './category.reducer';
import * as fromJoke from './joke.reducer';

export interface State {
  [fromCategory.categoryFeatureKey]: fromCategory.State;
  [fromJoke.jokeFeatureKey]: fromJoke.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCategory.categoryFeatureKey]: fromCategory.reducer,
  [fromJoke.jokeFeatureKey]: fromJoke.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
