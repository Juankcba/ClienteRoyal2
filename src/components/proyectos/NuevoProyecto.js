import React, { Fragment, useState, useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Tabla from "../tabla/Tabla";
import {size} from "lodash";
const fetch = require("node-fetch");
const SERVER =  'http://qaerpdv.preupdv.cl';
const SERVER_PORT =  8090;

const NuevoProyecto = (props) => {
  const axios = require('axios');
  const {setOpcion} = props; 
  const [programas, guardarProgramas] = useState({});
  const [sedes, guardarSedes] = useState({});
  const [regiones,setRegiones] = useState({});
  const [ciudades, setCiudades] = useState({});
  const [comunas, setComunas] = useState({});
  const [ramos, setRamos] = useState({});
  useEffect(() => {
    const obtenerProgramas = async () => {
      const url = `${SERVER}:${SERVER_PORT}/v1/carro/programas`;
      
      
      const response = await fetch(url,{
        method:'GET',
          headers : {
              'Content-Type' : 'application/json',
              "Accept": "*/*",
              "Cache-Control": "no-cache",
              "Host": `${url.replace('http://','').replace('https://','')}:8090`,
              "Content-Length": "746",
              "Connection": "keep-alive",
              
          },
      
      });
      const programas = await response.json();
      
            console.log("cantidad de elementos " , size(programas));
            guardarProgramas(programas);
          }
          
    
    obtenerProgramas();
    
  }, [])
  useEffect(() => {

    const obtenerSedes = async () => {
      const url = 'http://erpdv.preupdv.cl:8090/v1/carro/sedes';
      const programas = await axios.get(url)
            console.log("cantidad de elementos " , size(programas.data));
            guardarSedes(programas.data);
    }
    
    obtenerSedes();

    
  }, [])
  useEffect(() => {
    const obtenerRegiones = async () => {
      const url = 'http://erpdv.preupdv.cl:8090/v1/carro/regiones';
      const programas = await axios.get(url)
            console.log("cantidad de elementos " , size(programas.data));
            setRegiones(programas.data);
         
    }
    obtenerRegiones();
   
  }, [])
  useEffect(() => {
    const obtenerCiudades = async () => {
      const url = 'http://erpdv.preupdv.cl:8090/v1/carro/ciudad/all';
      const programas = await axios.get(url)
            console.log("cantidad de elementos " , size(programas.data));
            setCiudades(programas.data);
          }
       
    
    obtenerCiudades();
   
    
  }, [])
  useEffect(() => {
    const obtenerRamos = async () => {
      const url = 'http://erpdv.preupdv.cl:8090/v1/carro/ramos';
      const programas = await axios.get(url);
            console.log("cantidad de elementos " , size(programas.data));
            setRamos(programas.data);
          }
          
    
    obtenerRamos();
    
  }, [])
  useEffect(() => {
    const obtenerComuna = async () => {
      const url = 'http://erpdv.preupdv.cl:8090/v1/carro/comuna/all';
      const programas = await axios.get(url);
            console.log("cantidad de elementos " , size(programas.data));
            setComunas(programas.data);
          
    }
    obtenerComuna();
    
    
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
