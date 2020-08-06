// import React, { Component } from '../node_modules/react';
import React, { Component } from '../../node_modules/react';
import { Toolbar } from '../../node_modules/@material-ui/core';
import logo from '../image/logoGrazi.svg';


import './Header.css';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="container" >

        <header>
          <a href="./index.js">
          <img src ={logo} 
          className="imagemTeste" alt="Logo"  />
          <strong className="tituloHeader" > Graziela Santos</strong>
          </a>
        </header>
        <Toolbar component="nav" className="menuHeader" >
          <button id="buttonMenu" >Inicio</button>
          <button id="buttonMenu" >Sobre</button>
          <button id="buttonMenu" >Fotos</button>
          <button id="buttonMenu" >Contato</button>
        </Toolbar>
        
      </div>
    );
  }
}

export default Header;
