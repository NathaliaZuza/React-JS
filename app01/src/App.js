import React,{useState} from 'react';

export default function App(){
  const hora = 22
  const cumprimento=()=>{
    //const hora= new Date().getHours()
    if (hora >=0 && hora < 13){
      return <p>Bom dia!</p>
    } else if (hora >=13 && hora < 18){
      return <p>Boa tarde!</p>
    } else{
      return <p>Boa noite!</p>
    }
  }

  return(
    <>
      {cumprimento()}
    </>
  )

}