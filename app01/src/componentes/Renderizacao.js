import React, {useState} from 'react'

export default function Renderizacao() {

    // UseState. Primeiro coloca a variável, depois onde será setada essa variável.
    const [log,SetLog]=useState(false) 

    // Renderização condicional de hora (retorna "bom dia", "boa tarde" ou "boa noite" dependendo do horário da máquina)
    const cumprimento=()=>{
        // const hora = 10 //aqui é para colocar uma hora fixa para teste
        const hora = new Date().getHours()
        if (hora >= 0 && hora < 13){
            return 'Bom dia!'
        } else if (hora >= 13 && hora < 18){
            return 'Boa tarde!'
        } else {
            return 'Boa noite!'
        }
    }

    // Renderização condicional de Login (Retorna se você está logado, mudando o chamado do botão quando você o aperta)
    const msgLogin=()=>{
        return 'Logado'
    }
    const msgLogoff=()=>{
        return 'Favor logar'
    }

    // Imprime na tela
    return (
        <>
            <h2>Cumprimento</h2>
            <p>{cumprimento()}</p>

            <h2>Login</h2>
            <p>{log?msgLogin():msgLogoff()}</p>
            <button onClick={()=>SetLog(!log)}>{log?'Logoff':'Login'}</button>
        </>
    )
}