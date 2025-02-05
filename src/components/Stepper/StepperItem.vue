<template>
  <div
    :class="[
      'stepper-item flex flex-col relative border-current mb-8',
      {'items-start': alignLeft},
      {'items-center': alignCenter},
      {'items-end': alignRight}
    ]"
  >
    <StepperItemBorder
      v-if="textBottom"
      :background-color="backgroundColor"
      :align-left="alignLeft"
      :align-center="alignCenter"
      :align-right="alignRight"
      :first="first"
      :last="last"
      :text-bottom="textBottom"
      :text-top="textTop"
      :dashed-border="dashedBorder"
      :border-color="borderColor"
      :color="color"
    />
    <div
      :class="[
        'w-16 md:w-32 min-w-max  flex flex-col relative',
        {'items-start': alignLeft},
        {'items-center': alignCenter},
        {'items-end': alignRight}
      ]"
    >
      <div
        v-if="textTop"
        class="mb-6"
      >
        <slot />
      </div>
      <div
        :class="[
          'z-10 rounded-full w-5 h-5 absolute border border-transparent',
          { '!border-current': active }
        ]"
        :style="`color: ${color}; background-color: ${backgroundColor}; top: ${textTop ? '2.427rem' : '-0.627rem'}`"
      >
        <div
          class="rounded-full w-3 h-3 absolute bg-current"
          style="left: 0.1875rem; top: 0.1875rem; color: ${color};"
        >
          <check
            v-if="finished"
            class="w-2 absolute top-0.5 left-0.5 z-20 text-white"
          />
        </div>
      </div>
      <div
        v-if="textBottom"
        class="mt-6"
      >
        <slot />
      </div>
    </div>
    <StepperItemBorder
      v-if="textTop"
      :background-color="backgroundColor"
      :align-left="alignLeft"
      :align-center="alignCenter"
      :align-right="alignRight"
      :first="first"
      :last="last"
      :text-bottom="textBottom"
      :text-top="textTop"
      :dashed-border="dashedBorder"
      :border-color="borderColor"
      :color="color"
    />
  </div>
</template>

<script>
import { Check } from '../Icons';
import StepperItemBorder from './StepperItemBorder.vue';
import { config } from 'tailwind-plugin-lob';

const { theme } = config;
const { colors } = theme;

export default {
  name: 'StepperItem',
  components: { Check, StepperItemBorder },
  props: {
    position: {
      type: String,
      default: 'middle',
      validator: (prop) => ['first', 'middle', 'last'].includes(prop)
    },
    alignment: {
      type: String,
      default: 'center',
      validator: (prop) => ['left', 'center', 'right'].includes(prop)
    },
    textVerticalAlign: {
      type: String,
      default: 'bottom',
      validator: (prop) => ['bottom', 'top'].includes(prop)
    },
    color: {
      type: String,
      default: colors.primary['500']
    },
    // will default to color if not provided
    borderColor: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: colors.white.DEFAULT
    },
    active: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    dashedBorder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    first () {
      return this.position === 'first';
    },
    last () {
      return this.position === 'last';
    },
    alignLeft () {
      return this.alignment === 'left';
    },
    alignCenter () {
      return this.alignment === 'center';
    },
    alignRight () {
      return this.alignment === 'right';
    },
    textTop () {
      return this.textVerticalAlign === 'top';
    },
    textBottom () {
      return this.textVerticalAlign === 'bottom';
    }
  }
};
</script>

<style scoped lang="scss">
.stepper-item {
  min-width: 4rem;

  @screen md {
    min-width: 8rem;
  }
}
</style>
