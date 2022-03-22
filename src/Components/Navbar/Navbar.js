import React from "react"
import Button from '@mui/material/Button';
import "./Navbar.css"
import CartWidget from "../CartWidget";


function Navbar(props) {
    return(
        <header className='main-header'>
        <img src= "./imgProyecto/logo.png" className='Container-logo'/>
        <ul className='navbar'>
          <li><Button variant="contained">Inicio</Button></li>
          <li><Button variant="contained">Productos</Button></li>
          <li><Button variant="contained">Nosotros</Button></li>
          <li><Button variant="contained">Contacto</Button></li>
          <CartWidget></CartWidget>
        </ul>
       
      </header>
    )
}

export default Navbar;



