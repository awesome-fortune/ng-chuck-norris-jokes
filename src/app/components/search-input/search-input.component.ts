import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() categoryFilterTerm = new EventEmitter<string>();
  icon = faSearch;

  private destroy$: Subject<void> = new Subject<void>();
  private keyUp$: Subject<string> = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    this.keyUp$
      .asObservable()
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe((value) => this.categoryFilterTerm.emit(value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onKeyUp(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.keyUp$.next(value);
  }
}
