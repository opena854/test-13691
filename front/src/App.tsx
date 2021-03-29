import React, { FormEvent, useState } from 'react';
import {Button} from '@material-ui/core';


function App() {
  const [color, setColor] = useState<string>("Un botón");
  
  const addingOpt = (e: FormEvent<HTMLFormElement>): void => {
    setColor('¿Algo?')
    e.preventDefault()
  }

  return (
    <div className="app">
      <header>
        <h1>Hi</h1>
        <form  id="form1" onSubmit={addingOpt} >
          <Button type="submit" form="form1" variant="contained" color="default" >{color}</Button>
        </form>
        
      </header>

    </div> 
  );
}

export default App;
