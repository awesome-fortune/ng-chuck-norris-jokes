import { NavBarComponent } from './nav-bar.component';
import { centered } from '@storybook/addon-centered/angular';
import { moduleMetadata } from '@storybook/angular';
import { NavItemComponent } from '../nav-item/nav-item.component';

export default {
  title: 'Nav bar',
  component: NavBarComponent,
  decorators: [
    centered,
    moduleMetadata({
      declarations: [NavBarComponent, NavItemComponent],
    }),
  ],
};

export const Default = () => ({
  props: {
    navItems: ['Category1', 'Category2', 'Category3', 'Category4', 'Category5'],
  },
  template: `<app-nav-bar [navItems]="navItems"></app-nav-bar>`,
});
