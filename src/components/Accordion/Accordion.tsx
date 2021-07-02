import React from 'react';

// export type AccordionCollapsedType = boolean ==== my variant

export type ItemType = {
  title: string
  value: number
}

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
  /**
   * Optional color of header text
   */
  color?: string
}

export function Accordion(props: AccordionPropsType) {


  return (
    <div>
      <AccordionTitle color={props.color}
                      title={props.titleValue}
                      onChange={props.onChange}
        /*collapsed={props.collapsed}*//>
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}


type AccordionTitlePropsType = {
  title: string
  // &===== collapsed: AccordionCollapsedType
  onChange: () => void
  color?: string
}


function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={(e) => props.onChange()/*&===== (!props.collapsed)*/
  } style={{color: props.color ? props.color : 'black'}}>{props.title}</h3>

}


type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return <ul>
    {props.items.map( (i, index) =>
      <li key={index} onClick={ () => {props.onClick(i.value)}}>{i.title}</li>)}
  </ul>
}
