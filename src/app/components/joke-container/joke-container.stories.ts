import { JokeContainerComponent } from './joke-container.component';
import { centered } from '@storybook/addon-centered/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';

export default {
  title: 'Joke container',
  component: JokeContainerComponent,
  decorators: [
    centered,
    moduleMetadata({
      declarations: [JokeContainerComponent, ButtonComponent],
    }),
  ],
};

export const Default = () => ({
  component: JokeContainerComponent,
});
