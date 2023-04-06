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

  function Navigation(props) {
    return (
      <Navbar className="justify-content-center">
        <Nav className="justify-content-end">

            <RouterLink to="/">
                <span className={`${props.selection === 'home' ? 'selected' : ""}`}>Home</span>
            </RouterLink>

            <RouterLink to="/collection">
                <span className={`${props.selection === 'collection' ? 'selected' : ""}`}>Collection</span>
            </RouterLink>

            <RouterLink to="/verification">
                <span className={`${props.selection === 'verification' ? 'selected' : ""}`}>Verification</span>
            </RouterLink>

            <RouterLink to="/FAQ">
                <span className={`${props.selection === 'faq' ? 'selected' : ""}`}>FAQ</span>
            </RouterLink>
        </Nav>
      </Navbar>
    );
  }

  export default Navigation;