import React from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Select stories',
  component: Select,
};


export const WithValue = () => {
  return (
    <>
      <Select
        onChange={action('Value changed')}
        value={'2'}
        items={[{value: '1', title: 'Minsk'},
          {value: '2', title: 'Magadan'},
          {value: '3', title: 'Kemerovo'},
          {value: '4', title: 'Saint-Petersburg'},]}
      />
    </>
  )
}


export const WithoutValue = () => {
  return (
    <>
      <Select
        onChange={action('Value changed')}
        items={[{value: '1', title: 'Minsk'},
          {value: '2', title: 'Magadan'},
          {value: '3', title: 'Kemerovo'},
          {value: '4', title: 'Saint-Petersburg'},]}
      />
    </>
  );
}