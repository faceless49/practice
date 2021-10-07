import {useEffect, useState} from 'react';

export default {
  title: 'useEffect demo'
}

export const SimpleExample = () => {
  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)
  console.log('SimpleExample')


  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()


    // api.getUsers().then('')
    //setInterval
    //indexedDb
    //document.getElementbyId
    //document.title = 'User';


  }, [counter])
  useEffect(() => {
    console.log('useEffect only first render (component didmount)')
    document.title = counter.toString()
  }, [])
  useEffect(() => {
    console.log('UseEffect every render')
    document.title = counter.toString()
  })

  return (
    <div>
      Hello, {counter}, {fake}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setFake(fake + 1)}>+</button>
    </div>
  );
};


export const SetTimeoutExample = () => {
  const [counter, setCounter] = useState(1)
  const [fake, setFake] = useState(1)
  console.log('SetTimeoutExample')


  useEffect(() => {
    // setTimeout(() => {
    console.log('Tick`')
    //   document.title = counter.toString()
    // }, 1000)
    const intervalID = setInterval(() => {
      setCounter(state => state + 1)
    }, 1000)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div>
      Hello, counter: {counter}, fake: {fake}
      {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
      {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
    </div>
  );
};


export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1)

  console.log('ResetEffectExample render ' + counter)


  useEffect(() => {
    console.log('Effect occurred: ' + counter)

    return () => {
      console.log('RESET EFFECT ' + counter)
    }

  }, [counter])

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      Hello, counter: {counter}
      <button onClick={increase}>++
      </button>
    </div>
  );
};


export const KeysTrackerExample = () => {
  const [text, setText] = useState('')

  console.log('ResetEffectExample render ' + text)


  useEffect(() => {
    console.log('Effect occurred: ' + text)
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      // setText((state) => state + e.key)
      setText(text + e.key)
    }
    window.addEventListener('keypress', handler)
    return () => {
      window.removeEventListener('keypress', handler)
    }

  }, [text])


  return (
    <div>
      Typed text: {text}
    </div>
  );
};
