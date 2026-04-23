import React, { useState } from 'react';

function ComponenteCrearCita({ agregarCita }) {
    // Estado para la cita
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Función que actualiza el estado cada vez que escribís
    const actualizarState = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const enviarCita = (e) => {
        e.preventDefault();
        if (cita.mascota.trim() === '' || cita.propietario.trim() === '') {
            alert('Completá los campos obligatorios');
            return;
        }

        cita.id = Date.now();

        agregarCita(cita);

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    };

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={enviarCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={actualizarState} value={cita.mascota} />
                
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño" onChange={actualizarState} value={cita.propietario} />
                
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value={cita.fecha} />
                
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value={cita.hora} />
                
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" onChange={actualizarState} value={cita.sintomas}></textarea>
                
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    );
}

export default ComponenteCrearCita;