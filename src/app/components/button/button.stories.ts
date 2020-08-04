import { ButtonComponent } from './button.component';
import { centered } from '@storybook/addon-centered/angular';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [centered],
};

export const Default = () => ({
  component: ButtonComponent,
});
