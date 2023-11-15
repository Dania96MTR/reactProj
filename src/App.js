import './App.css';
import styles from "./App.module.css"
import { useState } from 'react';


function App() {
  const [number , setInvertal] = useState("")
  const [meters , setMeters] = useState("")

 
  function change(e){
    setInvertal(e.target.value)
  }
  function calc(e){
    e.preventDefault()
    const convert = parseInt(number) * 0.0254
    setMeters(convert) 
    
  }

  
  return (
    <>
    <div className={styles.main}>
        <p className={styles.inchToMeter}>Inch-To-Meter Converter</p>
        <form onSubmit={(e) => calc(e)} >
            <div>
                <p className={styles.enterNumber}>Number of inches: </p>
                <input onChange={(e) => change(e)} type="number" placeholder="Enter number of inches here.." id="inches" value={parseInt(number)} required ></input>
            </div>
            <button type="submit">Calculate</button>
        </form>
        <div className={styles.result}>
           <p >{meters ? meters : "200 Inches = 5.08 meters"}</p> 
        </div>
    </div>
    </>
  );
}

export default App;
