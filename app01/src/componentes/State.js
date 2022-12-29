import React,{useState} from 'react'

export default function State(){

    const [form,setForm]=useState({"nome":"","curso":"","ano":""})
    const handlFormChange=(e)=>{
        if(e.target.getAttribute('name')=='fnome'){
            setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
        } else if (e.target.getAttribute('name')=='fcurso'){
            setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
        } else if (e.target.getAttribute('name')=='fano'){
            setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
        }
    }

    return(
        <div style={{fontFamily: "Segoe UI", backgroundColor: "#ddfffd", width: "30%", height: "290px", marginLeft: "2rem", borderRadius:"1rem"}}>
            
            <div style={{padding:"2rem"}}>
                <label>Nome </label>
                <input type="text" name="fnome" value={form.nome} onChange={(e)=>handlFormChange(e)}></input><br/><br/>
                <label>Curso </label>
                <input type="text" name="fcurso" value={form.curso} onChange={(e)=>handlFormChange(e)}></input><br/><br/>
                <label>Ano </label>
                <input type="text" name="fano" value={form.ano} onChange={(e)=>handlFormChange(e)}></input><br/>

                <p>Nome digitado: {form.nome}</p>
                <p>Curso digitado: {form.curso}</p>
                <p>Ano digitado: {form.ano}</p>
            </div>
        </div>
    )
}