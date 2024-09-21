import { useState } from 'react'
import Navbar from "./Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

    </>
  )
}

export default App
