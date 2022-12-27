import React,{useState} from 'react';
import Led from './componentes/Led'

export default function App(){

  const [ligado,setLigado]=useState(true)

  return(
    <>
      <Led/>
    </>
  )

}