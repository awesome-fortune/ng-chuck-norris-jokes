import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JokesApiService } from '../services/jokes-api.service';
import * as fromAppActions from '../actions/app.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class JokesApiEffects {
  constructor(private actions$: Actions, private jokesApi: JokesApiService) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAppActions.enterHomePage),
      mergeMap(() =>
        this.jokesApi.getCategories().pipe(
          map((categories) => fromAppActions.loadCategoriesSuccess({ categories })),
          catchError((err) => of(fromAppActions.loadCategoriesFailure({ errorMessage: err.message })))
        )
      )
    )
  );

  loadJoke$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAppActions.loadJoke),
      mergeMap(({ selectedCategory }) =>
        this.jokesApi.getRandomJoke(selectedCategory).pipe(
          map((joke) => fromAppActions.loadJokeSuccess({ joke })),
          catchError((err) => of(fromAppActions.loadJokeFailure({ errorMessage: err.message })))
        )
      )
    )
  );
}
