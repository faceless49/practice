import React, {useState} from 'react';
import './App.css';
import {Accordion,} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';


export type ItemType = {
  title: string
  value: number
}



function App() {
  // const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)


  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [on, setOn] = useState<boolean>(true)
  const onClick = (value: any) => {
    //code
  }
  const items = [{title: 'Dima', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4},
    ]

  return (
    <div className="App">
      <Accordion
        items={items}
        onClick={onClick}
        titleValue={'Controlled menu'}
        collapsed={accordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
      <Rating
        value={ratingValue}
        onClick={setRatingValue}/>
      <OnOff
        on={on}
        onChange={(on) => setOn(on)}/>

    </div>
  );
}


export default App;
