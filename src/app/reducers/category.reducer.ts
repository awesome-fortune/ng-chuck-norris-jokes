import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as fromAppActions from '../actions/app.actions';
import * as fromRoot from './index';

export const categoryFeatureKey = 'category';

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
  on(fromAppActions.loadCategoriesSuccess, (state, { categories }) => ({ ...state, items: categories }))
);

const selectCategories = createFeatureSelector<fromRoot.State, State>(categoryFeatureKey);
export const selectCategoryItems = createSelector(selectCategories, (state: State) => state.items);
export const selectSelectedCategory = createSelector(selectCategories, (state: State) => state.selectedCategory);
