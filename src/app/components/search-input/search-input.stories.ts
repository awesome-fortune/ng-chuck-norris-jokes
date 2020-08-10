import { SearchInputComponent } from './search-input.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Search input',
  component: SearchInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [SearchInputComponent],
    }),
  ],
};

export const Default = () => ({
  component: SearchInputComponent,
});
