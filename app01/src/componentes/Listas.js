import React from 'react'

export default function Lista(){

    const carros=['Golf','HRV','Focus','Cruze','Argo','Gol','Polo',]
    const listaCarros=carros.map( (c)=>
    
     <p>{c}</p>
    )
    return(

        <div style={{fontFamily:"Segoe UI"}}>
            {listaCarros}
        </div>

    )
}