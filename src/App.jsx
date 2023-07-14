
import './App.css'
import { useCompra } from './Utils/Function'
import NavPages from './components/TabPages'
import NavS from './components/Navbar'

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
