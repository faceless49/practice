import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
  const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)


  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)


  return (
    <div className="App">
      <Rating value={ratingValue} onClick={setRatingValue}/>
      {/*<Accordion/>*/}
      <OnOff/>
      <UncontrolledAccordion titleValue={'Menu'}/>

      {/*<OnOff/>*/}
      {/*<OnOff/>*/}

      <UncontrolledRating/>


    </div>
  );
}


export default App;
