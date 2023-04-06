import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";

function Header(props) {
    return (
        <Container className="heading pt-3 pb-3" fluid>
        <Row>
          <Col className="d-md-none d-lg-block" sm={2} xs={2}>
            <Link to={'/'}>
              <h1>Mura</h1>
            </Link>
          </Col>
          <Col className="d-md-none d-lg-block" sm={6} xs={6}>
          </Col>
          <Col sm={4} xs={4}>
            <Navigation selection={props.selection} />
          </Col>
        </Row>
      </Container>
    );
}
export default Header;