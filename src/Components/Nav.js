import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useNavigate} from "react-router-dom"
const NavBars = () => {
  const auth = localStorage.getItem('user');
const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate("/login");

  }
 
  return (
    <div>
    {auth ? (
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="Applicationlogo">
            <img
              src="https://yt3.googleusercontent.com/ytc/AIdro_lpwLOOTumlQiiMYMHbBgJfQXVyRBGrZdTZ6NbtY-YA8wg=s900-c-k-c0x00ffffff-no-rj"
              width="60"
              height="60"
              
              className="d-inline-block align-top applogo"
             
            />
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Products</Nav.Link>
              <Nav.Link href="/add">Add Products</Nav.Link>
              <Nav.Link href="/update">Update Products</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/login" onClick={logout}>Logout ({JSON.parse(auth).name})</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ) : (
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* You can add additional navigation items here if needed */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )}
  </div>
  );
};


export default NavBars;
