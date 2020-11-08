// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MyTheButtonComponent } from './the-button.component';

export default {
  title: 'Example1/TheButton',
  component: MyTheButtonComponent,
} as Meta;

const Template: Story<MyTheButtonComponent> = (args: MyTheButtonComponent) => ({
  component: MyTheButtonComponent,
  props: args,
});

export const Short = Template.bind({});
Short.args = {
  text: 'Button',
};

export const Long = Template.bind({});
Long.args = {
  text: 'Button-long',
};
