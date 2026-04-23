import React from 'react';
import AdministrarCita from "./AdministrarCita";
import './Listado.css';


function Listado({ citas, eliminarCita }) {
    

    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            
            {citas.map(cita => (
                <AdministrarCita 
                    key={cita.id} 
                    cita={cita} 
                    eliminarCita={eliminarCita} 
                />
            ))}
        </div>
    );
}

export default Listado;