import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCategory from '../../reducers/category.reducer';
import * as fromAppActions from '../../actions/app.actions';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit, OnDestroy {
  @Input() navItemName;
  selectedCategory$: Observable<string>;
  click$: Subject<Event> = new Subject<Event>();
  destroy$: Subject<void> = new Subject<void>();

  @HostListener('click', ['$event'])
  onClick(e: Event): void {
    this.click$.next(e);
  }

  constructor(private store: Store<fromRoot.State>) {
    this.selectedCategory$ = store.pipe(select(fromCategory.selectSelectedCategory));
  }

  ngOnInit(): void {
    this.click$
      .asObservable()
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe(() => this.store.dispatch(fromAppActions.setSelectedCategory({ selectedCategory: this.navItemName })));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
