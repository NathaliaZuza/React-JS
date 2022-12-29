import React from 'react'

export default function Lista(){

    // const carros=['Golf','HRV','Focus','Cruze','Argo','Gol','Polo',]
    const carros=[
        {categoria: "Esporte", preco:"110000.00", modelo:"Gof GTI"},
        {categoria: "Esporte", preco:"120000.00", modelo:"Camaro"},
        {categoria: "SUV", preco:"85000.00", modelo:"HRV"},
        {categoria: "SUV", preco:"82000.00", modelo:"T-Cross"},
        {categoria: "Utilitário", preco:"120000.00", modelo:"Hillux"},
        {categoria: "Utilitário", preco:"90000.00", modelo:"Ranger"},
    ]
    const listaCarros=carros.map( (c)=>
     <p>{c.categoria} - R$ {c.preco} - {c.modelo}</p>
    )
    return(

        <div style={{fontFamily:"Segoe UI"}}>
            {listaCarros}
        </div>

    )
}