import React,{useContext,useState,useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
//Extraer si un proyecto esta activo
const proyectosContext = useContext(proyectoContext);
const {proyecto} = proyectosContext;
const tareasContext = useContext(tareaContext);
const {tareaseleccionada, errortarea, agregarTarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea} = tareasContext;
//effect que detecta si hay una tarea seleccionada

useEffect(() => {
    if(tareaseleccionada !== null){
        guardarTarea(tareaseleccionada);
    } else {
        guardarTarea({
            nombre: '',
            
            
        })
    }
}, [tareaseleccionada]);

//state dle formulario

const[tarea,guardarTarea] = useState({

    producto: '',
            nombre: '',
            
})
//extrae el nombre del proyecto

const {nombre} = tarea;
const {comentario} = tarea; 
 //si no hay proyecto selecionado 
 if(!proyecto) return null;

 //array para destructuring y extrae el proyecto actual
 const [proyectoActual] = proyecto;

 //leer los valores del formulario

 const hadleChange = e => {
     guardarTarea({
         ...tarea,
         [e.target.name] : e.target.value
     })
 }

 const onSubmit = e => {
     e.preventDefault();
     //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }
     
     //revisar si es edicion o nueva tarea 
     if(tareaseleccionada === null){
         //agregar la nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            //tarea.estado= false;
            agregarTarea(tarea);
     } else {
         // actualizar tarea existe 
         actualizarTarea(tarea);
         //elimina tarea seleccionada del state
         limpiarTarea();
     }
    

     //obtener y filtrar las tareas del proyecto actual
     obtenerTareas(proyectoActual.id);
     //reiniciar el form 
     guardarTarea({
        nombre: '',
        

     })
 }
    return (  
        <div className="formulario">            
        <form onSubmit= {onSubmit}>
            <div className="contenedor-input">
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Acciones..."
                    name="nombre"
                    value= {nombre}
                    onChange = {hadleChange}
                    />
            </div>
            
            
            <div className="contenedor-input">
                <input 
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value={tareaseleccionada ? 'Editar Pedido' : 'Agregar Pedido'}
                    />

            </div>
        </form>
        {errortarea ? <p className= "mensaje error">El nombre del local es obligatorio</p> : null }
        </div>
    );
}
 
export default FormTarea;