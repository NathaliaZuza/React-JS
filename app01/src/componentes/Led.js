import React,{useState} from 'react';
import Off from './img/off.png'
import On from './img/on.png'

export default function Led(){

  const [ligado,setLigado]=useState(true)

  return(
    <>
    <img src={ligado?On:Off}/>
    <br></br>
    <button onClick={()=>setLigado(!ligado)}>{ligado?'Desligar':'Ligar'}</button>
    </>
  )

}