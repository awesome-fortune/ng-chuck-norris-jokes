import { FooterComponent } from './footer.component';
import { centered } from '@storybook/addon-centered/angular';

export default {
  title: 'Footer',
  component: FooterComponent,
  decorators: [centered],
};

export const Default = () => ({
  component: FooterComponent,
});
