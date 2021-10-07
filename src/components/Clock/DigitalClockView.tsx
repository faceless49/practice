import React from 'react';
import {ClockViewPropsType, getTwoDigitsStrings} from './Clock';

export const DigitalClockView = (props: ClockViewPropsType) => {
  const date = props.date


  return <>
    <div>
      <span>{getTwoDigitsStrings(date.getHours())}</span>
      :
      <span>{getTwoDigitsStrings(date.getMinutes())}</span>
      :
      <span>{getTwoDigitsStrings(date.getSeconds())}</span>
    </div>
  </>
}