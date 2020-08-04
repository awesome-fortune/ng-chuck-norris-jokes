import { NavBarComponent } from './nav-bar.component';
import { centered } from '@storybook/addon-centered/angular';

export default {
  title: 'Nav bar',
  component: NavBarComponent,
  decorators: [centered],
};

export const Default = () => ({
  component: NavBarComponent,
});
