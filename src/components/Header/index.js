// import React, { Component } from '../node_modules/react';
import React, { Component } from 'react';
import { Toolbar } from '@material-ui/core';
import logo from '../../image/logoGrazi.svg';
import {Link } from 'react-router-dom';


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
          <Link to='/'><button id="buttonMenu">Inicio</button></Link>
          <Link to='/sobre'><button id="buttonMenu">Sobre</button></Link>
          <Link to='/fotos'><button id="buttonMenu">Fotos</button></Link>
          <Link to='/contato'><button id="buttonMenu">Contato</button></Link>
        </Toolbar>
        
      </div>
    );
  }
}

export default Header;
