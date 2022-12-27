import React from 'react'
import Dog from './img/dog.jpg'

export default function Header(){
    return(
        <header>
            <img scr={Dog}/>
            <h1>Doguinho</h1>
        </header>
    )
}