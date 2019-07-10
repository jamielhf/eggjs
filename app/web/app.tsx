import * as React from 'react';
import { hydrate } from 'react-dom/server';


class App extends React.Component  {
  constructor(){
    super()
  }
  render(){
    return(
      <div>555
      <button onClick={() => {alert('666')}}>click</button>
      </div>
    )
  }
}

export const content = hydrate(<App />);;
