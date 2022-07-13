import React from 'react';
import './App.css';
import imagem from "./img/sla.jpg"

export default class App extends React.Component{

  state = {
    nome: 'Anthony',
    idade: '21',
    comida: 'strogonoff',
    musicas: ['I took a pill in ibiza', 'Slow Down', 'Rise up']

  }
  

  render(){
    return(
      <div>
        <h1>Fala pessoal, ma chamo {this.state.nome}!</h1>
        <h2>Tenho {this.state.idade} anos!</h2>
        <h3>Minha comida predileta é {this.state.comida}!</h3>
        <h4>Minhas musicas prediletas estão abaixo!</h4>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ol>

        <img src={imagem} alt='imagem'/>
      </div>
    )
  }
}
