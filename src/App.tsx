import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/Scrollhooks'
import RelojHooks from './components/relojHooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Este es el Use Effect</h3>
      <ScrollHooks />

      <RelojHooks titulo="Reloj Parametro"/>
      
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

      <h2>Aca va la seccion donde voy a practicar hooks</h2>

      <h3>Este es el Use State</h3>
      <ContadorHooks titulo="Seguidores"/>

    </>
  )
}

export default App
