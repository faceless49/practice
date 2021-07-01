import React from 'react';
import {ItemType} from '../../App';

// export type AccordionCollapsedType = boolean ==== my variant


export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  /**
   * Elements that are show when accordion is opened(not collapsed)
   */
  items: ItemType[]
  /**
   * Callback that is called when any item will clicked
   * @param value is value of clicked item
   */
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {


  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} /*collapsed={props.collapsed}*//>
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}


type AccordionTitlePropsType = {
  title: string
  // &===== collapsed: AccordionCollapsedType
  onChange: () => void
}


function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={(e) => props.onChange()/*&===== (!props.collapsed)*/
  }>{props.title}</h3>

}
type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void


}
function AccordionBody(props: AccordionBodyPropsType) {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}