import { useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KeyCloakService from './services/KeycloakService'

function App() {
  const [count, setCount] = useState(0)
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const headers = { 'Authorization': KeyCloakService.Token() };
    axios.get('https://example.com/getProduct', { headers })
      .then(response => setProduct(response.data));
  }

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
        <p>{KeyCloakService.GetUserName()}</p>
        <button onClick={getProduct}>
          getProduct
        </button>
        <p>{product}</p>
      </div>
    </>
  )
}

export default App
