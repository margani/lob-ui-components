import LobButton from '../Button/Button.vue';
import RadioButton from '../RadioButton/RadioButton.vue';
import RadioGroup from '../RadioGroup/RadioGroup.vue';
import Modal from './Modal.vue';
import mdx from './Modal.mdx';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const isModalVisible = false;
const radioModel = 'yes';

const PrimaryTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal, LobButton, RadioButton, RadioGroup },
  setup: () => ({ args }),
  data: () => ({ isModalVisible, radioModel }),
  template: `
    <LobButton @click="isModalVisible = true">
      Open Modal
    </LobButton>

    <Modal
      v-bind="args"
      :visible="isModalVisible"
      @close="isModalVisible = false"
    >
      <template v-slot:header>
        <h4>Select Tracking Events</h4>
      </template>

      Would you like to export an additional CSV of associated tracking events?
      <RadioGroup>
        <radio-button name="exportCSV" value="yes" label="Yes" v-model="radioModel"/>
        <radio-button name="exportCSV" value="no" label="No" v-model="radioModel" />
      </RadioGroup>

      <template v-slot:footer>
        <div class="flex self-end">
          <LobButton variant="secondary">Go back</LobButton>
          <LobButton variant="primary" class="ml-2">Submit</LobButton>
        </div>
      </template>
    </Modal>
    `
});

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
};
