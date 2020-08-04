import { ToolbarComponent } from './toolbar.component';
import { centered } from '@storybook/addon-centered/angular';

export default {
  title: 'Toolbar',
  component: ToolbarComponent,
  decorators: [centered],
};

export const Default = () => ({
  component: ToolbarComponent,
});
