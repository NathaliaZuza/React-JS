import React,{useState,useEffect} from 'react'

export default function App(){

  const [contagem,setContagem]=useState(0)

  useEffect(
    ()=>{
      console.log("Página carregada")
      document.title= 'Contagem: '+contagem
    }
  )

  return( 
    <>
    <p>Contagem: {contagem}</p>
    <button onClick={()=>setContagem(contagem+1)}>Contar</button>
    </>
  )
}

