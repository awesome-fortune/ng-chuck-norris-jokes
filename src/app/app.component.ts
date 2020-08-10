import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromAppActions from './actions/app.actions';
import * as fromRoot from './reducers';
import * as fromCategory from './reducers/category.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Chuck Norris Jokes';
  categories$: Observable<string[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.categories$ = store.pipe(select(fromCategory.selectCategoryItems));
  }

  ngOnInit(): void {
    this.store.dispatch(fromAppActions.enterHomePage());
  }
}
