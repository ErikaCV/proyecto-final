
import './App.css'
import NavPages from './Components/TabPages'
import { ProductProvider } from './Components/ProductContext.jsx'
import NavBar from './Components/Navbar'
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
