import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCategory from '../../reducers/category.reducer';
import * as fromJoke from '../../reducers/joke.reducer';
import * as fromAppActions from '../../actions/app.actions';
import { Observable, Subject } from 'rxjs';
import { Joke } from '../../models/joke.model';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.scss'],
})
export class JokeContainerComponent implements OnInit, OnDestroy {
  selectedCategory: string;
  joke$: Observable<Joke>;
  destroy$: Subject<void> = new Subject<void>();
  buttonClick$: Subject<void> = new Subject<void>();

  constructor(private store: Store<fromRoot.State>) {
    store
      .pipe(select(fromCategory.selectSelectedCategory), takeUntil(this.destroy$))
      .subscribe((value) => (this.selectedCategory = value));

    this.joke$ = store.pipe(select(fromJoke.selectJokeValue));
  }

  ngOnInit(): void {
    this.dispatchLoadJoke();
    this.buttonClick$
      .asObservable()
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe(() => this.dispatchLoadJoke());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadNextJoke(): void {
    this.buttonClick$.next();
  }

  private dispatchLoadJoke(): void {
    this.store.dispatch(
      fromAppActions.loadJoke({
        selectedCategory: this.selectedCategory ? this.selectedCategory.toLowerCase() : this.selectedCategory,
      })
    );
  }
}
