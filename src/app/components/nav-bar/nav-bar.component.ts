import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, AfterViewChecked {
  @Input() navItems: string[];
  unfilteredNavItems = [];
  invalidCategoryIcon = faExclamationCircle;
  searchTerm = '';

  constructor() {}

  ngOnInit(): void {}

  onFilterCategories(term: string): void {
    this.searchTerm = term.trim();
    if (this.searchTerm.length === 0) {
      this.navItems = this.unfilteredNavItems;
    } else {
      this.navItems = this.navItems.filter((item) => item.includes(this.searchTerm.toLowerCase()));
    }
  }

  ngAfterViewChecked(): void {
    if (this.unfilteredNavItems.length === 0) {
      this.unfilteredNavItems = [...this.navItems];
    }
  }
}
