import { JokeContainerComponent } from './joke-container.component';
import { centered } from '@storybook/addon-centered/angular';

export default {
  title: 'Joke container',
  component: JokeContainerComponent,
  decorators: [centered],
};

export const Default = () => ({
  component: JokeContainerComponent,
});
