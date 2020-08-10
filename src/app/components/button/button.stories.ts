import { ButtonComponent } from './button.component';
import { centered } from '@storybook/addon-centered/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

export default {
  title: 'Button edit',
  excludeStories: /.*Data$/,
  component: ButtonComponent,
  decorators: [
    centered,
    withKnobs,
    moduleMetadata({
      declarations: [ButtonComponent, FooterComponent],
      imports: [CommonModule],
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
