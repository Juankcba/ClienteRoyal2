import React, { Fragment, useState, useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Tabla from "../tabla/Tabla";
import {size} from "lodash";
const NuevoProyecto = (props) => {
  const {setOpcion} = props; 
  const [programas, guardarProgramas] = useState({});
  const [sedes, guardarSedes] = useState({});
  const [regiones,setRegiones] = useState({});
  const [ciudades, setCiudades] = useState({});
  const [comunas, setComunas] = useState({});
  const [ramos, setRamos] = useState({});
  useEffect(() => {
    const resultado = fetch("http://erpdv.preupdv.cl:8090/v1/carro/programas",  {
      method: "GET",
      headers: {
          "Content-Type": "text/plain"
      }});
    const programas = resultado.then((respuesta) => respuesta.json());
    programas
      .then((resultado) => {
        console.log("cantidad de elementos " , size(resultado));
        guardarProgramas(resultado);
      })
      .catch((e) => console.log(e));
    
  }, [])
  useEffect(() => {
    const resultado = fetch("http://erpdv.preupdv.cl:8090/v1/carro/sedes" , {
      method: "GET",
      headers: {
          "Content-Type": "text/plain"
      }});
    const programas = resultado.then((respuesta) => respuesta.json());
    programas
      .then((resultado) => {
        console.log("cantidad de elementos " , size(resultado));
        guardarSedes(resultado);
      })
      .catch((e) => console.log(e));
    
  }, [])
  useEffect(() => {
    const resultado = fetch("http://erpdv.preupdv.cl:8090/v1/carro/regiones" , {
      method: "GET",
      headers: {
          "Content-Type": "text/plain"
      }});
    const programas = resultado.then((respuesta) => respuesta.json());
    programas
      .then((resultado) => {
        console.log("cantidad de elementos " , size(resultado));
        setRegiones(resultado);
      })
      .catch((e) => console.log(e));
    
  }, [])
  useEffect(() => {
    const resultado = fetch("http://erpdv.preupdv.cl:8090/v1/carro/ciudad/all"  ,{
      method: "GET",
      headers: {
          "Content-Type": "text/plain"
      }});
    const programas = resultado.then((respuesta) => respuesta.json());
    programas
      .then((resultado) => {
        console.log("cantidad de elementos " , size(resultado));
        setCiudades(resultado);
      })
      .catch((e) => console.log(e));
    
  }, [])
  useEffect(() => {
    const resultado = fetch("http://erpdv.preupdv.cl:8090/v1/carro/ramos" , {
      method: "GET",
      headers: {
          "Content-Type": "text/plain"
      }});
    const programas = resultado.then((respuesta) => respuesta.json());
    programas
      .then((resultado) => {
        console.log("cantidad de elementos " , size(resultado));
        setRamos(resultado);
      })
      .catch((e) => console.log(e));
    
  }, [])
  useEffect(() => {
    const resultado = fetch("http://erpdv.preupdv.cl:8090/v1/carro/comuna/all" , {
      method: "GET",
      headers: {
          "Content-Type": "text/plain"
      }});
    const programas = resultado.then((respuesta) => respuesta.json());
    programas
      .then((resultado) => {
        console.log("cantidad de elementos " , size(resultado));
        setComunas(resultado);
      })
      .catch((e) => console.log(e));
    
  }, [])
  
  
  //mostar formulario
  
  const onClickRegiones = () => {
    //mostrarFormulario();
    setOpcion(
    <Tabla datos={regiones} title="Regiones" />
    );
  };
  const onClickCiudades = () => {
    //mostrarFormulario();
    setOpcion(
    <Tabla datos={ciudades} title="Ciudades" />
    );
  };
  const onClickProgramas = () => {
    //mostrarFormulario();
    setOpcion(
    <Tabla datos={programas} title="Programas" />
    );
  };
  const onClickSedes = () => {
    //mostrarFormulario();
    setOpcion(
    <Tabla datos={sedes} title="Sedes" />
    );
  };
  const onClickRamos = () => {
    //mostrarFormulario();
    setOpcion(
    <Tabla datos={ramos} title="Ramos" />
    );
  };
  const onClickComunas = () => {
    //mostrarFormulario();
    setOpcion(
    <Tabla datos={comunas} title="Comunas" />
    );
  };
  
  

  return (
    <Fragment>
       <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickRegiones}
      >
        Regiones {size(regiones)}
      </button>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickCiudades}
      >
        Ciudades {size(ciudades)}
      </button>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickComunas}
      >
        Comunas {size(comunas)}
      </button>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickProgramas}
      >
        Programas {size(programas)}
      </button>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickSedes}
      >
        Sedes {size(sedes)}
      </button>
     
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickRamos}
      >
        Ramos {size(ramos)}
      </button>
      
       
      
      
      
    
      
    </Fragment>
  );
};

export default NuevoProyecto;
