import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from "./components/Componente.jsx"
import Estado from './components/Estado.jsx'
import RenderizadodeElementos from './components/RederizadodeElementos.jsx'
import Eventos from './components/Eventos.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <hr />

      <section>
        <h2>Section 1</h2>
        <h3>Componentes</h3>
        <Componente 
        msg="Hola soy un componente"
        numero = {1}
        />
        <hr />
        <Estado msg = "Pasandole propiedades al componente estado"/>
      </section>

      <hr/>

      <section>
        <h2>Section 2</h2>
        <h3>Renderizado de Elementos</h3>
        <RenderizadodeElementos/>
      </section>
      
      <hr/>

      <section>
        <h2>Eventos en React</h2>
        <Eventos/>
      </section>

      
    </>
  )
}

export default App
