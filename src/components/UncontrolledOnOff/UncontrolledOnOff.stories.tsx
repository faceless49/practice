import React from 'react';
import { UncontrolledOnOff } from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';


export default {
  title: 'UncontrolledOnOff stories',
  component: UncontrolledOnOff,
};


const callback = action('on or off clicked')
export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>unsync when change DefaultValue</div>



export const DefaultInputValue = () => <input defaultValue={'Hello'}/>