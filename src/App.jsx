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
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <ComponenteCrearCita />
          <Listado />
        </div>
      </div>




    </>
  )
}

export default App
