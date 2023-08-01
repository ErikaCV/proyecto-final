import { useState, useContext } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HomePage from './HomePage';
import { ShopPage } from "../Components/ShopPage";
import AboutPage from './AboutPage';
import { ContactPage } from './ContactPage';
import { ProductDetailContainer } from "../Components/ProductDetailContainer";
import ProductManagement from "./ProductManagement";
import LoginForm from './LoginForm';
import { Dropdown, Nav } from 'react-bootstrap'; 
import { ProductContext } from './ProductContext';



function NavPages() {
  const [activeTab, setActiveTab] = useState('home');
  const getProductContextValue = useContext(ProductContext);

  const { products,} = getProductContextValue();

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const categories = Array.from(new Set(products.map(product => product.category)));


  return (
  <>  <div className='row'>
    <div className='col-md-1  tabPages ps-2 pe-0'>
    <Dropdown as="span">
                <Dropdown.Toggle variant="danger" id="dropdown-basic" className="pe-0">
                  Categorías
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map((category) => (
                    <Dropdown.Item key={category} as={Link} to={`/category/${category.toLowerCase()}`}>
                      {category} 
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
    </div>
    <div className=' p-0 col-md-11  '>


      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        id="uncontrolled-tab-example"
        className=" bg-warning"
      >
        
        <Tab eventKey="home" title={<Link to="/">Home</Link>} />
        <Tab eventKey="shop" title={<Link to="/shop">Shop</Link>} />
        <Tab eventKey="about" title={<Link to="/about">About</Link>} />
        <Tab eventKey="contact" title={<Link to="/contact">Contact</Link>} />
        <Tab eventKey="managet" title={<Link to="/manageProducts">Manage</Link>} />
      </Tabs>
      </div>
      </div>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/products/:id" element={<ProductDetailContainer/>} />
      <Route path="/category/:category" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/manageProducts" element={<ProductManagement/>} />
     <Route path="/login" element={<LoginForm />} />

      </Routes>
     
   </>
  );
}

export default NavPages;
