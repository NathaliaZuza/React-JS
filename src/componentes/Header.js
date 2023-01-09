import React from 'react'
import Dog from './img/dog.png'

export  default function Header(){
    return(
        <header>
            <img src={Dog}/>
            <h1>Imagem do doguinho</h1>
        </header>
    )
}