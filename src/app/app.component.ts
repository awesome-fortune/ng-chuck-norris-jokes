import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as homePageActions from './actions/app.actions';
import * as fromRoot from './reducers';
import * as fromCategories from './reducers/categories/categories.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Chuck Norris Jokes';
  categories$: Observable<string[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.categories$ = store.pipe(select(fromCategories.selectCategories));
  }

  ngOnInit(): void {
    this.store.dispatch(homePageActions.enterHomePage());
  }
}
