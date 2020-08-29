import React, { Fragment , useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';
//Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token){
    tokenAuth(token);
}
function App() {

    // Crear listado de Productos

    const [productos, guardarProductos ] = useState([
        {id:1, nombre: 'Servidor', ip: '192.168.155.10'},
        {id:2, nombre: 'Director', ip: '192.168.155.11'},
    ]);
    
    //Obtener la fe<cha

    const fecha = new Date().getFullYear();

    console.log(process.env.REACT_APP_BACKEND_URL);
    return ( <ProyectoState>
        <TareaState>
        <AlertaState>
            <AuthState>
            <Router>
                <Switch>
                    <Route exact path="/" component = {Login} />
                    <Route exact path="/nueva-cuenta" component =
                     {NuevaCuenta} />
                    <RutaPrivada exact path="/proyecto" component = 
                     {Proyectos} />
                </Switch>
            </Router>
            </AuthState>
            </AlertaState>
            </TareaState>
            </ProyectoState>
            
    );
}

export default App;