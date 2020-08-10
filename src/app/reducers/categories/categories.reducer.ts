import { createReducer, on } from '@ngrx/store';
import * as appActions from '../../actions/app.actions';
import * as fromRoot from '../index';

export const categoriesFeatureKey = 'categories';

export interface State {
  items: string[];
  selectedCategory?: string;
}

export const initialState: State = {
  items: [],
  selectedCategory: null,
};

export const reducer = createReducer(
  initialState,
  on(appActions.loadCategoriesSuccess, (state, { categories }) => ({ ...state, items: categories }))
);

export const selectCategories = (state: fromRoot.State) => state[categoriesFeatureKey].items;
export const selectSelectedCategory = (state: fromRoot.State) => state[categoriesFeatureKey].selectedCategory;
