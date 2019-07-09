/* eslint-disable react/react-in-jsx-scope */

import 'bootstrap/dist/css/bootstrap.css';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import MyButton from './MyButton';
import Welcome from './Welcome';
import btVueButton from '../src/bt-vue-button/bt-vue-button'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .addDecorator( withKnobs({ escapeHTML: false }) )
  .add('btnVueButton - Default', () => ({
    components: { btVueButton },
    template: `<div class="jumbotron"><btVueButton @clicked="action" :btnName="btnName" :btnId="btnId" :btnClass="btnClass" :btnValue="btnValue" :btnFinalState="btnFinalState" :btnDisabled="btnDisabled"></btVueButton></div>`,
    props: {
      btnName: {
        default: text('btnName')
      },
      btnId: {
          default: text('btnId')
      },
      btnClass: {
          default: text('btnClasses')
      },
      btnValue: {
          default: text('btnValue', 'Click Me'),
      },
      btnDisabled: {
          default: boolean('Disabled', false)
      },
      btnFinalState: {
        default: select('Final State', [null,'success', 'failure'])
      }
    },
    methods: {
      action: () => { 
        
    } }
  }))
