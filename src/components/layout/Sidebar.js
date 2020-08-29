import React from 'react';
import logo from './logo.png';
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos';
const Sidebar = () => {
    return ( 

        <aside>
            <img src={logo} className= "logo-app" alt="logo" /><h1>PEDIDOS<span></span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Clientes</h2>
                <ListadoProyectos />
            </div>
        </aside>
     );
}
 
export default Sidebar;