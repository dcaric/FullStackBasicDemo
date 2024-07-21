import './App.css';
import React, { useState } from 'react';
import { Button1 } from './components/buttons/Button1';
import { Label1 } from './components/labels/Label1';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Button1 key={"button1"} setCounter={setCounter} counter={counter} />
        <Label1 key={"lable1"} counter={counter} />
    </div>
);
}

export default App;
