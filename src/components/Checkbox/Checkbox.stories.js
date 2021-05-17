import Checkbox from './Checkbox.vue';
import mdx from './Checkbox.mdx';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: mdx
    }
  },
  argTypes: {
    'v-model': {
      control: {
        type: Boolean,
        default: true
      }
    }
  },
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: { Checkbox },
  template: '<checkbox v-bind="$props"></checkbox>',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Custom checkbox label',
  error: false
}
