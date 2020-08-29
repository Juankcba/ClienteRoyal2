import React,{Fragment,useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const  NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario,errorformulario,mostrarFormulario, agregarProyecto,mostrarError} = proyectosContext;

    //state para proyecto

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre de proyecto
    const {nombre} = proyecto;
    
    //lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia el proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }
        //agregar el state
        agregarProyecto(proyecto);
        //reinicar el form 
        guardarProyecto({
            nombre: ''
        })
    }
    //mostar formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    const onClickProducto = () => {
       // mostrarProductos(); 
    }
    return (  
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={ onClickFormulario}
        >Nuevo Cliente</button>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={ onClickProducto}
        >Nuevo Producto</button>

        {
            formulario 
            ?
            (
                
                <form
                className= "formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
                >
                    <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    value={nombre}
                    onChange ={onChangeProyecto}
                    >
                  
                    </input>
                    <input 
                    type="submit" 
                    className="btn btn-primario btn-block"
                    value= "Agregar Cliente">
                    </input>
                </form>

            ) : null

        }
        {errorformulario ? <p className="mensaje error">El Nombre del Cliente es obligatorio</p> : null}
        </Fragment>
    );
}

export default NuevoProyecto ;