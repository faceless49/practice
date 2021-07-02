import React from 'react';

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
  const selectedItem = props.items.find(i => i.value === props.value)

  return (
    <div>
      <select>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Mgdn</option>
      </select>
      <h3>{selectedItem && selectedItem.title}</h3>
      {props.items.map(i => <div key={i.value}>{i.title}</div>)}
    </div>
  );
}

