import React from 'react';
import {map} from "lodash";
const Tabla = (props) => {
    const {datos, title} = props;
    console.log("desde Tabla", datos);
return (
    <div class="card">
    <div class="card-header border-0">
      <h3 class="card-title">{title}</h3>
      <div class="card-tools">
        <a href="#" class="btn btn-tool btn-sm">
          <i class="fas fa-download"></i>
        </a>
       
      </div>
    </div>
    {title === "Programas" ? (
    <div class="card-body table-responsive p-0">
      <table class="table table-striped table-valign-middle">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio Base</th>
          <th>Precio Base Plataforma</th> 
        </tr>
        </thead>
        <tbody>
        {datos.map((item,i) => <tr  key={i}>
        <td>{item.name}</td>
        <td >{item.priceBase}</td>
        <td >{item.priceBasePlataforma}</td>   
        </tr> )}
        </tbody>
      </table>

    </div>
    ): ( null) }
     {title === "Sedes" ? (
    <div class="card-body table-responsive p-0">
      <table class="table table-striped table-valign-middle">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Comerce Code</th>
          <th>Sede Info</th> 
        </tr>
        </thead>
        <tbody>
        {datos.map((item,i) => <tr  key={i}>
        <td>{item.name}</td>
        <td >{item.commerceCode}</td>
        <td >boton</td>   
        </tr> )}
        </tbody>
      </table>

    </div>
    ): ( null) }
     {title === "Regiones" ? (
    <div class="card-body table-responsive p-0">
      <table class="table table-striped table-valign-middle">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Country_Id</th>
          <th>Active</th> 
        </tr>
        </thead>
        <tbody>
        {datos.map((item,i) => <tr  key={i}>
        <td>{item.name}</td>
        <td >{item.countryId}</td>
        <td >{item.active}</td>   
        </tr> )}
        </tbody>
      </table>

    </div>
    ): ( null) }
    {title === "Ciudades" ? (
    <div class="card-body table-responsive p-0">
      <table class="table table-striped table-valign-middle">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Region_ID</th>
          <th>Active</th> 
        </tr>
        </thead>
        <tbody>
        {datos.map((item,i) => <tr  key={i}>
        <td>{item.name}</td>
        <td >{item.regionId}</td>
        <td >{item.active}</td>   
        </tr> )}
        </tbody>
      </table>

    </div>
    ): ( null) }
    {title === "Comunas" ? (
    <div class="card-body table-responsive p-0">
      <table class="table table-striped table-valign-middle">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Region_ID</th>
          <th>Active</th> 
        </tr>
        </thead>
        <tbody>
        {datos.map((item,i) => <tr  key={i}>
        <td>{item.name}</td>
        <td >{item.regionId}</td>
        <td >{item.active}</td>   
        </tr> )}
        </tbody>
      </table>

    </div>
    ): ( null) }
    {title === "Ramos" ? (
    <div class="card-body table-responsive p-0">
      <table class="table table-striped table-valign-middle">
        <thead>
        <tr>
          <th>ID</th>
          <th>Ramos</th>
        </tr>
        </thead>
        <tbody>
        {datos.map((item,i) => <tr  key={i}>
        <td>{item.id}</td>
        <td >{item.name}</td>
        
        </tr> )}
        </tbody>
      </table>

    </div>
    ): ( null) }
  </div>
)
}
export default Tabla; 