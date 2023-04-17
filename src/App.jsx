import { useState } from 'react'
import './App.css'

export function App() {

  const box = ["" , "", "", "", "", "", "", "", ""]

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
       <div className="boxes">
         {box.map((b,key)=> <Box key={key}/>)}
       </div>
    </div>
  )
}

export function Box(){

  const [value,setValue] = useState()

  const style = {
    color : value ?  "rgb(84, 84, 84)" : '#FFFCCA' ,
  }
  return(
    <div style={style} onClick={()=> setValue(!value)} className="box">
        {value}
    </div>
  )
}

