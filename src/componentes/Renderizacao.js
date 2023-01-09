import React,{useState} from 'react'

export default function Renderizacao() {

    // UseState. Primeiro coloca a variável, depois onde será setada essa variável.
    const [log,SetLog]=useState(false) 
    const [cor,setCor]=useState(1)


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

    // Renderização condicional de cor
    const vermelho={color:'#f00'}
    const verde={color:'#0f0'}
    const azul={color:'#00f'}

    const retornaCor=(c)=>{
        if(c==1){
            return vermelho
        } else if  (c==2){
            return verde
        } else {
            return azul
        }
    }
    const mudaCor=()=>{
        setCor(cor+1)
        if(cor > 2){
            setCor(1)
        }
    }


    // Imprime na tela
    return (
        <div style={{textAlign:'center', padding:'4%', fontFamily:'Segoe UI'}}>
            <h2>Cumprimento</h2>
            <p>{cumprimento()}</p>

            <h2>Login</h2>
            <p>{log?msgLogin():msgLogoff()}</p>
            <button onClick={()=>SetLog(!log)}>{log?'Logoff':'Login'}</button>

            <h2>Cores</h2>
            <p style={retornaCor(cor)}>Zuza</p>
            <button onClick={()=>mudaCor()}>Muda cor</button>
        </div>
    )
}