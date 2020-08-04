import { FooterComponent } from './footer.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Footer',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [FooterComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Default = () => ({
  component: FooterComponent,
  props: {
    companyName: text('Company name', 'Test'),
  },
  template: `
  <app-footer [companyName]="companyName"></app-footer>
  `,
});
