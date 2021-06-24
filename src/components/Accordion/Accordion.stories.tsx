import React, {useState} from 'react';
import { Accordion } from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Accordion stories',
  component: Accordion,
};


const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion  titleValue={'Menu'} onChange={callback} collapsed={true}/>
export const UserUncollapsedMode = () => <Accordion  titleValue={'Users'} onChange={callback} collapsed={false}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion  titleValue={'Users'} onChange={ () => setValue(!value)} collapsed={value}/>
}
