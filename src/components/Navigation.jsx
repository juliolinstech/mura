import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RouterLink(props) {
    return (
      <Nav.Item>
        <Nav.Link>
          <Link to={props.to}>{props.children}</Link>
        </Nav.Link>
      </Nav.Item>
    );
  }

  function Navigation() {
    return (
      <Navbar className="justify-content-center">
        <Nav className="justify-content-end">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/collection">Collection</RouterLink>
          <RouterLink to="/verification">Verification</RouterLink>
          <RouterLink to="/FAQ">FAQ</RouterLink>
        </Nav>
      </Navbar>
    );
  }

  export default Navigation;