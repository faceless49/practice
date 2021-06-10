import React, {useState} from 'react';
import './App.css';
import {Accordion, } from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff, onType} from './components/OnOff/OnOff';

function App() {
  // const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)


  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [on, setOn] = useState<onType>(true) //

  return (
    <div className="App">
      {/* MY VARIANT <Accordion titleValue={'Controlled menu'}
    collapsed={accordionCollapsed} o
    nClick={setAccordionCollapsed}/>*/}

      <Accordion titleValue={'Controlled menu'}
                 collapsed={accordionCollapsed}
                 onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>


      <Rating value={ratingValue} onClick={setRatingValue}/>

      <OnOff on={on} onClick={setOn}/>

    </div>
  );
}


export default App;
