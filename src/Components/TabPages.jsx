import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HomePage from './HomePage';
import {ShopPage} from './ShopPage';
import AboutPage from './AboutPage';
import {ContactPage} from './ContactPage';

function NavPages() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        id="uncontrolled-tab-example"
        className=" tabPages mb-3 bg-warning"
      >
        <Tab eventKey="home" title={<Link to="/">Home</Link>} />
        <Tab eventKey="shop" title={<Link to="/shop">Shop</Link>} />
        <Tab eventKey="about" title={<Link to="/about">About</Link>} />
        <Tab eventKey="contact" title={<Link to="/contact">Contact</Link>} />
      </Tabs>
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default NavPages;
