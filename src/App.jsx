import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavScrollExample from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavScrollExample></NavScrollExample>
     
    </>
  )
}

export default App
