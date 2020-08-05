import { FooterComponent } from './footer.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Footer',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [FooterComponent],
    }),
  ],
};

export const Default = () => ({
  component: FooterComponent,
  props: {
    companyName: text('Company name', 'Test'),
  },
});
