import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import * as fromCategories from '../../reducers/categories/categories.reducer';

@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.scss'],
})
export class JokeContainerComponent implements OnInit {
  selectedCategory$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
    this.selectedCategory$ = store.pipe(select(fromCategories.selectSelectedCategory));
  }

  ngOnInit(): void {}
}
