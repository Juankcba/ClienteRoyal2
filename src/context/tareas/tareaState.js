import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {TAREAS_PROYECTO,AGREGAR_TAREA,
        VALIDAR_TAREA,ELIMINAR_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA, LIMPIAR_TAREA

} from '../../types';
//import {v4 as uuid} from 'uuid';
import clienteAxios from '../../config/axios'
const TareaState = props => {

    const initialState = {
      /*  tareas: [
            {id:1, nombre: 'Director', estado: true, proyectoId: 1},
            {id:2,nombre: 'Camara', estado: true, proyectoId: 2},
            {id:3,nombre: 'Tom', estado: true, proyectoId: 3},
            {id:4,nombre: 'Asistente', estado: false, proyectoId: 4}
        ],*/
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada : null
    }


    //crear dispatch y state

    const [state, dispatch] = useReducer(TareaReducer, initialState);
    // Crear las Funciones

    //Obtener las tareas de un proyecto

    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas',{params: {proyecto}});
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }
    //agregar una tarea al proyecto
    const agregarTarea = async tarea => {
       // tarea.id = uuid();
       try {
           const resultado = await clienteAxios.post('/api/tareas',tarea);
        dispatch({
            type: AGREGAR_TAREA,
            payload: resultado.data.tarea
        })
       } catch (error) {
           console.log(error);
       }
        
    }

    //valida y muesta un error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    //eliminar tarea por id 
    const eliminarTarea = async (id,proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`,{params:{proyecto}});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
     //edita o modifica una tarea
    const actualizarTarea = async tarea => {
        
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea);
            
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
        }) 
        } catch (error) {
            console.log(error);
        }  
}
    // extrae la tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

  
    //elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    return(
        <TareaContext.Provider
            value={{
              //  tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;

