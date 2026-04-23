import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ComponenteCrearCita from "./CrearCita";
import Listado from './Listado'
import './Listado.css'
import './cita.css'


function App() {

  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar esta cita?");
    if (confirmar) {
      const nuevasCitas = citas.filter(cita => cita.id != id);
      setCitas(nuevasCitas);
    }
  };



  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">

          <ComponenteCrearCita agregarCita={agregarCita} />

          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  )
}

export default App
