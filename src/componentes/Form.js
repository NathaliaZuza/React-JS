import React,{useState} from "react"

export default function Formulario(){

    const [nome,setNome]=useState('')
    const [carro,setCarro]=useState('HRV')

    // const handleChangeNome=(e)=>{
    //     setNome(e.target.value)
    // }

    return(
        <div style={{fontFamily: "Segoe UI", backgroundColor: "#ddfffd", width: "30%", height: "220px", marginLeft: "2rem", borderRadius:"1rem"}}>

            <div style={{margin: "2rem"}}>
                <h2 style={{paddingTop: "15px"}}>Formulário</h2>

                <label>Digite seu nome </label>
                <input type="text" name="fnome" value={nome} onChange={(e)=>setNome(e.target.value)}></input>
                <p>Nome digitado: {nome}</p>

                <label>Selecione um carro </label>
                <select values={carro} onChange={(e)=>setCarro(e.target.value)}>
                    <option value="HRV">HRV</option>
                    <option value="Golf">Golf</option>
                    <option value="Polo">Polo</option>
                    <option value="Jeep">Jeep</option>
                    <option value="Hillux">Hillux</option>
                </select>
                <p>Carro selecionado: {carro}</p>
            </div>

        </div>
    )
}