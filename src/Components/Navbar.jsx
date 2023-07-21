import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo2.png'
import { Image,  } from 'react-bootstrap';
import { FaSistrix } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { IconCart } from './IconCart';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';


function NavBar(Products) {
  console.log("navbar", Products)
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      
      <Container fluid>
      <Link to="/"><Image src={Logo} width={80} className="" /></Link>
      
   
        <Form className="d-flex bg-light border border-withe rounded-pill">
        <NavDropdown title="Categories" id="navbarScrollingDropdown" className='ps-2 pt-2'>
                             <Link to="/category/Women's Clothing">
                                <Nav>Women&apos;s Clothing</Nav>
                            </Link>
                            <Link to="/category/Men's Clothing">
                                <Nav>Men&apos;s Clothing</Nav>
                            </Link>
                            <Link to="/category/Jewelery">
                                <Nav>Jewelery</Nav>
                            </Link>
                            <Link to="/category/Electronics">
                                <Nav>Electronics</Nav>
                            </Link>
            </NavDropdown>
            <SearchBar/>
            <FaSistrix className=' fs-1 pe-3 ' />
           
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
        <Navbar.Text>
        <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <IconCart  />
           <Button variant="danger" className='mt-2   rounded-pill me-1 text-light' style={{height:40}}>Iniciar Seción</Button>{' '}
            
            <Nav.Link href="#" disabled className='bg-light border rounded-circle'>
              <FcManager className='fs-1' /> 
            </Nav.Link>
          </Nav>
  
          </Navbar.Text>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;