import React, {useState} from 'react';

export type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
  // setValue: (value:  0 | 1 | 2 | 3 | 4 | 5) => void
}

export function UncontrolledRating(props: RatingPropsType) {
 // ! Lesson 8 FIRST METHOD
  // let [value, setValue] = useState(1)

  // return (
  // <div>
  //   <Star selected={value > 0} setValue={setValue} value={1}/>
  //   <Star selected={value > 1} setValue={setValue} value={2}/>
  //   <Star selected={value > 2} setValue={setValue} value={3}/>
  //   <Star selected={value > 3} setValue={setValue} value={4}/>
  //   <Star selected={value > 4} setValue={setValue} value={5}/>
  // </div>
  // )


  // ! SECOND METHOD


  let [value, setValue] = useState(0)

  return (
    <div>
      <Star selected={value > 0}
            setValue={() => {setValue(1)}}/>
      <Star selected={value > 1}
            setValue={() => {setValue(2)}}/>
      <Star selected={value > 2}
            setValue={() => {setValue(3)}}/>
      <Star selected={value > 3}
            setValue={() => {setValue(4)}}/>
      <Star selected={value > 4}
            setValue={() => {setValue(5)}}/>
    </div>
  )
}

// * Мы здесь сетвэлью прокидываем через пропсы как колбек в компоненту СТАР.
// * Там мы можем ее вызвать на клик. Также прокидываем ей данные, т.е value.
// * Чтобы потом вызвать колбек с параметром value.(52 string)
// ? Можно оставить только setvalue() родителю Чтобы ребенок только звонил и сообщал что был клик

type StarPropsType = {
  selected: boolean
  setValue: () => void
  // ? value: 1 | 2 | 3 | 4 | 5 // * Lesson 8 FIRST METHOD
}

function Star(props: StarPropsType) {
  return <span onClick={() => {
    props.setValue()
  }}>
    {props.selected ? <b>star </b> : 'star '}</span>
}





// ? FIRST METHOD
/*  function Star(props: StarPropsType) {
  return <span onClick={() => {
    props.setValue(props.value)
  }}>
    {props.selected ? <b>star </b> : 'star '}</span>
}*/
