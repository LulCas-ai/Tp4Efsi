import './cita.css'

function AdministrarCita() {
    return (
        <div className="cita">
            <p>Mascota: <span>Sifon</span></p>
            <p>Dueño: <span>Flecha</span></p>
            <p>Fecha: <span>2023-08-05</span></p>
            <p>Hora: <span>09:24</span></p>
            <p>Sintomas: <span>Duerme mucho</span></p>

            <button className="button eliminar u-full-width">
                Eliminar
            </button>
        </div>
    )
}


export default AdministrarCita