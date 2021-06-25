import React from 'react';
import {ItemType} from '../../App';

// export type AccordionCollapsedType = boolean ==== my variant


export type AccordionPropsType = {
  titleValue: string
  //&===== collapsed: AccordionCollapsedType
  //&===== My Variant onClick: (collapsed: AccordionCollapsedType) => void

  collapsed: boolean
  onChange: () => void
  items: ItemType[]
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

function AccordionBody() {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}