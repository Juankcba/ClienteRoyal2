import React from 'react';

const Producto = ({producto}) => {
    const {nombre, ip, id} = producto

    // Resetear Raspberry 
    const resetearRaspberry = id => {
        console.log('reiniciando',id);
    }
    return ( 
        <div>
            <h2> {nombre}</h2>
            <p>{ip}</p>
            <button
                type="button"
                onClick={() => resetearRaspberry(id)}
                >Reset</button>

        </div>
        );
}
 
export default Producto;