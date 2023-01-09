import React,{useState} from 'react';
import Off from './img/off.png'
import On from './img/on.png'

export default function Led(props){


  return(
    <>
    <img src={props.ligado?On:Off}/>
    <br></br>
    <button onClick={()=>props.setLigado(!props.ligado)}>
        {props.ligado?'Desligar':'Ligar'}
    </button>
    </>
  )

}