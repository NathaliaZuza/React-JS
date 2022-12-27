import React from 'react'

export default function App(){
  const nome=()=>{
    return('Nathália')
  }
  const sobrenome=()=>{
    return('Zuza')
  }
  return(
    <section>
      <p>
        {'Meu nome é ' + nome() + ' ' + sobrenome()}
      </p>
    </section>
  )
}