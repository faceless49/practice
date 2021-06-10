import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionCollapsedType} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff, OnOffPropsType, onType} from './components/OnOff/OnOff';

function App() {
  // const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)


  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<AccordionCollapsedType>(false)
  let [on, setOn] = useState<onType>(true) //

  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Accordion titleValue={'Controlled menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
      <OnOff on={on} onClick={setOn}/>

    </div>
  );
}


export default App;
