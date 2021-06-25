import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';


export default {
  title: 'Accordion stories',
  component: Accordion,
};


const callback = action('accordion mode change event fired')
const onClickCallback = action('some items was clicked')


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
  onChange: callback,
  onClick: onClickCallback
}


export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  ...callbacksProps,
  titleValue: 'Menu',
  collapsed: true,
  items: [],
}

export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
  ...callbacksProps,
  titleValue: 'Users',
  collapsed: false,
  items: [{title: 'Dima', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4},
  ],
}


export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion
    titleValue={'Users'}
    onChange={() => setValue(!value)}
    collapsed={value}
    items={[
      {title: 'Dima', value: 1},
      {title: 'Valera', value: 2},
      {title: 'Artem', value: 3},
      {title: 'Viktor', value: 4},
    ]}
    onClick={(value) => {
      alert(`users with ID ${value} should be happy`)
    }}
  />
}
