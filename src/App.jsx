
import './App.css'
import { useCompra } from './Utils/Function'
import NavPages from './Components/TabPages'
import NavS from './Components/Navbar'

function App() {
  const { comprar } = useCompra();

  return (
    <>
    <NavS/>
    <NavPages/>
    
    </>
  )
}

export default App
