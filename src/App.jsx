
import './App.css'
import NavPages from './components/TabPages'
import { ProductProvider } from './components/ProductContext'
import NavBar from './components/Navbar'
import { CartProvider } from './Components/CartContext'


function App() {


  return (
    <>
    <ProductProvider >
      <CartProvider>
    <NavBar/>
    <NavPages/> 
    </CartProvider>
    </ProductProvider>
    
    </>
  )
}

export default App
