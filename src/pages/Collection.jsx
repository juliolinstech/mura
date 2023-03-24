import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Collection() {
    return (
        <div className="App">
          <Header />
        <header className="App-header">
          <h2 className="text-center pt-5 pb-4">Evidence Collection</h2>
          <h4 className="text-center pt-3 pb-2">Collect evidence from the Internet and prove that it exists</h4>
          <div className="pt-5"></div>
          
          <Container fluid>
            <Row>
              <Col sm={4} />
              <Col sm={4} className="borderedDiv">
                <div>
                <div className="pt-4" />
                  <Form>
                  <div style={{ height: '20px' }} />
                  <Form.Group controlId="targetUrl">
                    <Form.Label>Where to collect evidence?</Form.Label>
                    <Form.Control type="url" placeholder="Enter URL" />
                    <Form.Text className="text-muted">
                      The URL must start with "https://"
                    </Form.Text>
                  </Form.Group>
                  <div style={{ height: '8px' }} />

                  <div className="pt-4" />

                  <Button className="submitButton" variant="primary" type="submit">
                  Submit
                  </Button>
                  <div style={{ height: '20px' }} />
                  </Form>
                </div>
                </Col>
              <Col sm={4} />
            </Row>
          </Container>

        </header>
        <Footer />
      </div>
    );
}
export default Collection;