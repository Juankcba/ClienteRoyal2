import React,{useContext,useEffect, useState} from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autenticacion/authContext';
const Proyectos = () => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;
    const [opcion, setOpcion] = useState(undefined);
    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);
    return (  

           <div className="contenedor-app">
              <Sidebar setOpcion={setOpcion}/> 

               <div className ="seccion-principal">
                   <Barra />
                   <main>
                   <FormTarea />
                       <div className="contenedor-tareas">
                           {opcion}
                       
                       </div>
                   </main>
               </div>
           </div>
    );
}



export default Proyectos;