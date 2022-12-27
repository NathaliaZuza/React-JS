import React,{useState} from 'react';
import Off from './componentes/img/off.png'
import On from './componentes/img/on.png'

export default function App(){

  const [ligado,setLigado]=useState(true)

  return(
    <>
    <img src={ligado?On:Off}/>
    <br></br>
    <button onClick={()=>setLigado(!ligado)}>On/Off</button>
    </>
  )

}