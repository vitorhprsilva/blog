import React, { Component } from 'react';

import './Home.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nutri: []
    }
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
    .then((r) => r.json())
    .then((json)=>{
      let state = this.state;
      state.nutri = json;
      this.setState(state);
    })
  };

  render(){
    return (
      <div className="container" >
        
        {this.state.nutri.map((item)=>{
          return(
            <article className="post" >
              <strong className="titulo" > {item.titulo} </strong>
              <img src={item.capa} alt="" className="capa" />
              <p className="subtitulo" > {item.subtitulo} </p>
              <a className="botao" href="./index.js" >Acessar</a>
            </article>
          );
        })}

      </div>
    );
  }
}

export default App;
