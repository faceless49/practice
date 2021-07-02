import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';


const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
  table: {
    category: categoryName
  }
})
//
// const EventsCategory = {
//   table: {
//     category: 'Events'
//   }
// }
//
// const ColorsCategory = {
//   table: {
//     category: 'Colors'
//   }
// }
// const OtherCategory = {
//   table: {
//     category: 'Other'
//   },
// }
export default {
  title: 'components/Accordion stories',
  component: Accordion,
  argTypes: {
    color: {
      control: 'color',
      ...GetCategoryObj('Color')
    },
    onChange: {
      ...GetCategoryObj('Event')
    },
    onClick: {
      ...GetCategoryObj('Event')
    },
    items: {...GetCategoryObj('Main')},
    collapsed: {...GetCategoryObj('Main')},
    titleValue: {...GetCategoryObj('Main')},
  }
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

}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion
    {...args}
    collapsed={value}
    onChange={() => setValue(!value)}

  />
}
ModeChanging.args = {
  titleValue: 'Users',
  items: [
    {title: 'Dima', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4},
  ],
  onClick: (value) => {
    alert(`users with ID ${value} should be happy`)
  }
}

