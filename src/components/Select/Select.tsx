import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.scss'

type ItemType = {
  title: string
  value?: any
}

type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: ItemType[]
}

export function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false)
  const [hoveredElementValue, sethoveredElementValue] = useState(props.value)

  const selectedItem = props.items.find(i => i.value === props.value)
  const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

  useEffect(() => {
    sethoveredElementValue(props.value);
  }, [props.value])

  const toggleItems = () => setActive(!active)
  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  }

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement = e.key === 'ArrowDown'
            ? props.items[i + 1]
            : props.items[i - 1]

          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            break;
          }
        }
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }

  return (
    <div className={s.select_wrap} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={s.main}
            onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {
        active &&
        <div className={s.items}>
          {props.items.map(i =>
            <div
              onMouseEnter={() => {
                sethoveredElementValue(i.value)
              }}
              className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
              key={i.value}
              onClick={() => {
                onItemClick(i.value)
              }}
            >
              {i.title}
            </div>)}
        </div>
      }
    </div>
  )
}

