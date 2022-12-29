import React,{useState, useEffect} from 'react'

export default function effect(){

  const [count, setCount]=useState(0)
  const [countB, setCountB]=useState(10)
  const [user, setUser]=useState()

  // Roda toda vez que a página é atualizada, pois não foi atribuido uma condição de dependência a ele
  useEffect(() =>{
    console.log("Roda a cada renderização")
    console.log(user)
  })

  // Roda apenas quando o count for chamado, independente se a página atualizou ou não
  useEffect(() =>{
    console.log("Só roda ao implementar valor")
  }, [count])

   // Só executa quando a página  é carregada
  useEffect(() =>{
    console.log("Só executa uma vez")
  }, [])

  // clean up function
  useEffect(()=>{
    const timer = setTimeout(() => {
      console.log(`O incrementador foi alterado ${count} vezes`)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [count])

  // Fetch pra pegar api
  useEffect(() =>{
    fetch(`http://api.github.com/users/NathaliaZuza`)
    .then((res) => res.json())
    .then((json) => setUser(json))
  },  [])


  return(
    <>
      <button onClick={() =>setCount(prevCount => prevCount + 1)}>Renderizar</button>
      <p>{count}</p> <br/>

      <button onClick={() =>setCountB(prevCount => prevCount + 1)}>Renderizar B</button>
      <p>{countB}</p>

      {user  && (
        <div>
          <p>Meus dados: </p>
          <h3>{user.name}</h3>
          <p>
            Site:<p>{user.public_repos}</p>
          </p>
          <img src={user.avatar_url}></img>
        </div>
       )}
    </>
  )
}