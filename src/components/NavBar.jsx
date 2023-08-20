import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Carpishop</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/silla">Sillas</Link></li>
            <li><Link className="menu-link" to="/productos/mesa">Mesas</Link></li>
            <li><Link className="menu-link" to="/productos/plato">Platos</Link></li>
            <li><Link className="menu-link" to="/productos/buzos">Buzos</Link></li>
            <li><CartWidget /></li>

        </ul>
    </nav>
  )
}

export default Navbar