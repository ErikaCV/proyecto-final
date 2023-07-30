
import './App.css'
import NavPages from './Components/TabPages'
import { ProductProvider } from './Components/ProductContext'
import NavBar from './Components/Navbar'
import { CartProvider } from './Components/CartContext'
import Footer from './Components/Footer'


function App() {


  return (
    <>
    <ProductProvider >
      <CartProvider>
    <NavBar/>
    <NavPages/> 
    </CartProvider>
    </ProductProvider>
    <Footer/>
    
    </>
  )
}

export default App
