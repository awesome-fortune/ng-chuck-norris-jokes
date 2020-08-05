import { ButtonComponent } from './button.component';
import { centered } from '@storybook/addon-centered/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    centered,
    withKnobs,
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
};

export const Default = () => ({
  component: ButtonComponent,
  props: {
    text: text('Text', 'Test'),
  },
  template: `<app-button>{{ text }}</app-button>`,
});
