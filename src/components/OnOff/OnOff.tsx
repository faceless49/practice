export type onType = true | false

export type OnOffPropsType = {
  on: onType
  onClick: (on: onType) => void
}

export function OnOff(props: OnOffPropsType) {

  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '5px',
    backgroundColor: props.on ? 'green' : 'white' // * Если пропсы тру(пришли) возьми грин
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '5px',
    backgroundColor: props.on ? 'white' : 'red' // * Если пропсы тру(пришли) возьми грин

  };
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: props.on ? 'green' : 'white' // * Если пропсы тру(пришли) возьми грин

  }

  return (
    <div>
      <div style={onStyle} onClick={() => props.onClick(!props.on)}>On</div>
      <div style={offStyle} onClick={() => props.onClick(!props.on)}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}