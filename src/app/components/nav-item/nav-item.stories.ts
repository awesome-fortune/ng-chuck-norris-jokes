import { NavItemComponent } from './nav-item.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';

export default {
  title: 'Nav item',
  component: NavItemComponent,
  decorators: [
    centered,
    withKnobs,
    moduleMetadata({
      declarations: [NavItemComponent],
    }),
  ],
};

export const Default = () => ({
  props: {
    navItemName: text('Nav item name', 'Test'),
  },
  template: `<app-nav-item [navItemName]="navItemName"></app-nav-item>`,
});
