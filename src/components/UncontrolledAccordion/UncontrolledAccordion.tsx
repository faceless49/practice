import React, { useReducer, useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean
};
// ** Lesson 15 Reducers
type ActionType = {
  type: string;
};

const reducer = (state: boolean, action: ActionType) => {
  console.log("Reducer start");
  console.log(state);
  console.log(action);
  console.log("Reducer END");

  if (action.type === "TOGGLE-COLLAPSED") {
    return !state;
  }

  return state;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("UncontrolledAccordion render");

  // ** lesson 7
  // let [collapsed, setCollapsed] = useState(false)
  //
  //
  // return (
  //   <div>
  //     <AccordionTitle
  //       title={props.titleValue}/>
  //     <button
  //       onClick={() => setCollapsed(!collapsed)}>Toggle
  //     </button>
  //     {!collapsed && <AccordionBody/>}
  //   </div>
  // )

  //* lesson 15 use Reducer  let [collapsed, setCollapsed] = useState(false);
  let [collapsed, dispatch] = useReducer(reducer, false);

  return (
    <div>
      {/* <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setCollapsed(!collapsed);
        }} */}
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: "TOGGLE-COLLAPSED" });
        }}
      />{" "}
      {/* Здесь мы передаем
         тайтлу колбек, чтобы можно было вызывать из компоненты тайтл*/}
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void; // * Типизируем здесь колбек
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3
      onClick={() => {
        props.onClick();
      }}
    >
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

// ? Алгоритм
// ? На 39стр и 29 - аккордеон тайтл - ты теперь принимаешь свойство онклик
// ? h3 - я просто тег, у меня есть анонимная стрелочная функция, но когда по мне кликнут
// ? я могу вызвать функцию которую в меня передали из вне (29 строка), при клике говорит родителю
// ?  что на него кликнули и тогда Родитель говорит, вызови setCollapsed...
