import React from 'react';
import logo from './logo.png';
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = (props) => {
    const {setOpcion} = props; 
    
    return ( 

        <aside>
            <a href='https://www.preuniversitariopedrodevaldivia.cl/'>
            <img src={logo} className= "logo-app" alt="logo" />
                   </a>
        
            <h1>DASHBOARD<span></span></h1>
            <NuevoProyecto setOpcion={setOpcion}/>
            
        </aside>
     );
}
 
export default Sidebar;