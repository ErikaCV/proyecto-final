
import './App.css'
import NavPages from './components/TabPages'
import { ProductProvider } from './components/ProductContext'
import NavBar from './components/Navbar'



function App() {


  return (
    <>
    <ProductProvider >
    <NavBar />
    <NavPages /> 
    </ ProductProvider>
    </>
  )
}

export default App
