import AdministrarCita from "./AdministrarCita";
import './Listado.css'
import './cita.css'
import './App.css'

function Listado() {
    return (
        <>
            <div className="one-half column">
                <h2>Administra tus citas</h2>
                <AdministrarCita />
                <AdministrarCita />
                <AdministrarCita />
            </div>
        </>
    );
}

export default Listado;