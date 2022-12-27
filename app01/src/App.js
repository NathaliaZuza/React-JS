import React,{useState} from 'react';
import Numero from './componentes/Numero'

// import Header from './componentes/Header'
// import Corpo from './componentes/Corpo'

export default function App(){

  const [num,setNum]=useState(10)

  let n1=50



  return(
   <>
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>
   </>
  )
}