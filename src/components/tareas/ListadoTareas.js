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
    if(!proyecto) return <h2>Seleciona un Cliente</h2>
    //Array destructuring para extraer el proyecto actual

    const [proyectoActual] = proyecto;

    // Elimina un proyecto
    const onClickEliminar = () =>{
        eliminarProyecto(proyectoActual._id)
    }
    return (
        <Fragment>
        <h2>Cliente: {proyectoActual.nombre}</h2>
        <ul className="listado-tareas">
            {tareasproyecto.length === 0
             ?(<li className ="tarea"><p>No Hay Pedidos</p></li>)            
             : <TransitionGroup>
                { tareasproyecto.map(tarea => (
                 <CSSTransition
                    key={tarea.id}
                    timeout={200}
                    className="tarea"
                 >
                    <Tarea 
                        tarea={tarea}
                    />
                 </CSSTransition>
             ))}
             </TransitionGroup>
            }


        </ul>
        <button 
        type="button"
        className="btn btn-eliminar"
        onClick = {onClickEliminar}
        >Eliminar Cliente &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;