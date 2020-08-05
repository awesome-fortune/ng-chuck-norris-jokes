import { ToolbarComponent } from './toolbar.component';
import { withKnobs, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Toolbar',
  component: ToolbarComponent,
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [ToolbarComponent],
    }),
  ],
};

export const Default = () => ({
  component: ToolbarComponent,
  props: {
    title: text('Title', 'Test'),
  },
});
