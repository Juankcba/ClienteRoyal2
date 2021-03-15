import React,{Fragment,useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
const ListadoTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;
    
    //obtener las tareas del proyecto
     const tareasContext = useContext(tareaContext);
     const {tareasproyecto} = tareasContext;
    //si no hay proyecto selecionado 
    if(!proyecto) return <h2>Seleciona una Opción</h2>
    //Array destructuring para extraer el proyecto actual

    const [proyectoActual] = proyecto;

    // Elimina un proyecto
    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual._id)
    }
    return (
        <Fragment>
        
        </Fragment>
     );
}
 
export default ListadoTareas;