import Datepicker from './Datepicker.vue';
import DatepickerMonth from './DatepickerMonth.vue';
import DatepickerDay from './DatepickerDay.vue';
import { DaysOfWeek } from '../../utils';
import mdx from './Datepicker.mdx';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  subcomponents: { DatepickerMonth, DatepickerDay },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const dateModel = null;
const show = false;
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {  Datepicker },
  data: () => ({ dateModel, show }),
  setup: () => ({ args }),
  template: `
  <div class="relative">
    <label>
      Enter a date
      <input @click="show = !show" :value="dateModel" class="border border-gray-300" ref="input">
    </label>
    <datepicker v-bind="args" v-model="dateModel" v-model:open="show" :boundComponent="$refs.input"></datepicker>
  </div>
  `
});

const today = new Date();
const oneYearAgo = new Date();
const oneYearFromNow = new Date();
oneYearAgo.setMonth(today.getMonth() - 12);
oneYearFromNow.setMonth(today.getMonth() + 12);

const isDateDisabled = (date) => {
  const dayOfWeek = date.getDay();
  return dayOfWeek === DaysOfWeek.Saturday || dayOfWeek === DaysOfWeek.Sunday;
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'test',
  isDateDisabled,
  min: oneYearAgo,
  max: oneYearFromNow,
  localization: {
    keyboardInstruction: 'You can use arrow keys to navigate dates',
    calendarHeading: 'Calendar',
    closeLabel: 'Close',
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ],
    monthSelectLabel: 'Choose month',
    yearSelectLabel: 'Choose year',
    prevMonthLabel: 'Previous',
    nextMonthLabel: 'Next'
  }
};
