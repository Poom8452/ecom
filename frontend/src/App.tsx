import {  Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import './index.css'

import { Outlet } from 'react-router-dom'


function App( ){
  

  return (
    <div className='d-flex flex-column vh-100 '>
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <NavbarBrand>ShopG</NavbarBrand>
      </Container>
      <Nav>
        <a className='nav-link' href="/cart">Cart</a>
        <a className='nav-link' href="/cart">Sign In</a>
      </Nav>
      </Navbar>
    </header>
    <main>
      <div className="container mt-3 mb-3">
       <Outlet/>
      </div>
      
    </main>
    <footer>
      <div className="text-center bg-dark text-white">

        All right Reserved
        
      </div>
     
      
      
      </footer>
    </div>
  )
}

export default App;