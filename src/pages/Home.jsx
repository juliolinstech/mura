import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
    return (
        <div className="App">
          <Header selection="home" />
        <header className="App-header">
        <h2 className="text-center pt-5 pb-3 landing">
        All you need for evidence collection
        </h2>

          <Container>
            <Row>
              <Col sm={2} />
              <Col sm={8}>
                <Row className="pt-3">
                  <div style={{ height: '5px' }} />
                  <Col className="borderedDiv">
                    <Row className="pt-4">
                      <Col sm={4} />
                      <Col sm={4} style={{ fontWeight: 'bold' }}>
                        The only solution to combine
                      </Col>
                      <Col sm={4} />
                    </Row>
                    <div style={{ height: '15px' }} />
                    <Row className="pt-2">
                      <Col sm={4}>Low prices</Col>
                      <Col sm={4}>Chain-of-Custody compliance</Col>
                      <Col sm={4}>A mobile-friendly app</Col>
                    </Row>
                    <div style={{ height: '25px' }} />
                    <Row className="pt-2">
                      <Col sm={4}>No software downloads</Col>
                      <Col sm={4}>No delays</Col>
                      <Col sm={4}>One-click collections</Col>
                    </Row>
                    <div style={{ height: '20px' }} />
                  </Col>
                </Row>
              </Col>
              <Col sm={2} />
            </Row>
          </Container>

        <div style={{ height: '30px' }} />
        <h4 className="text-center pt-3 pb-3">
        Start Collecting Evidence
        </h4>
        <div style={{ height: '15px' }} />

        <Button className="submitButton" variant="primary" type="submit">
            Collect
        </Button>

        </header>
      <Footer />
      </div>
    );
}
export default Home;