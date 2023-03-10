import React from "react";
import axios from "axios";

export default class ListaCarros extends React.Component{

    state={
        carros:[]
    }

    componentDidMount(){
        axios.get('https://Apireact01.nathaliaz.repl.co')
        .then(res=>{
            const dadosCarros=res.data
            this.setState({carros:dadosCarros})
        })
    }
    render(){
        return(
           <div>
                {this.state.carros.map(
                    carro=> <div key={carro.id}> {carro.marca} </div>
                )}
            </div>
        )
    }
}