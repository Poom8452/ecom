import { Col, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import {sampleProducts} from './data'
import './index.css'


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
        <div className="row">

        
        {sampleProducts.map((product)=>

        <Col key={product.slug} sm={6} md={4} lg={3}>
         
          <img className='product-image rounded' src={product.image} alt="" />
          <h3><b>                                             </b></h3>
          <p>${product.price}</p>
    
        </Col>
       
        
        )}
      
      </div>
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