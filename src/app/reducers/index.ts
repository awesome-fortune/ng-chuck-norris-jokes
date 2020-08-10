import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCategories from './categories/categories.reducer';
import { categoriesFeatureKey } from './categories/categories.reducer';

export interface State {
  [fromCategories.categoriesFeatureKey]: fromCategories.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCategories.categoriesFeatureKey]: fromCategories.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
