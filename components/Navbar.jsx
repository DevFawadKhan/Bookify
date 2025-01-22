import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto ">
          <Link className='text-white  text-decoration-none mx-2' to="/">Home</Link>
            <Link className='text-white mt- text-decoration-none' to="/book/list">Add Listing</Link>
          </Nav>
        </Container>
      </Navbar>

   </>
  )
}

export default NavBar
