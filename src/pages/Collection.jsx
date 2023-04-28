import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading';
import CustomAlertCollection from '../components/CustomAlertCollection';

function Collection() {

    const [customAlert, setCustomAlert] = useState({
      show: false,
      success: true,
      message: '',
    });

    const [val, setVal] = useState("Enter URL");
    const [loading, setLoading] = useState(false);

    const submitHandler = (event) => {
      event.preventDefault();
      setLoading(true);
      console.log(val);
      const url = 'https://a3i80smzda.execute-api.us-east-1.amazonaws.com/collect'

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
          target: val,
        },
        body: JSON.stringify({target: val})
      })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setCustomAlert({
          show: true,
          success: true,
          message: `${data['url']}`,
        });
      })
      .catch((error) => {
        setLoading(false);
        setCustomAlert({
          show: true,
          success: false,
          message: "An error occurred. Try again later",
        });
        console.log(error.response);
      });
    };

    return (
        <div className="App">
          <Header selection="collection" />
        <header className="App-header">
        <CustomAlertCollection
          customAlert={customAlert}
          setCustomAlert={setCustomAlert}
        />
          <h2 className="text-center pt-5 pb-4">Evidence Collection</h2>
          <h4 className="text-center pt-3 pb-2">Collect evidence from the Internet and prove its authenticity</h4>
          <div className="pt-5"></div>
          
          <Container fluid>
            <Row>
              <Col sm={4} />
              <Col sm={4} className="borderedDiv">
                <div className="pt-4" />
                  <Form onSubmit={submitHandler} >
                  <div style={{ height: '20px' }} />
                  <Form.Group controlId="targetUrl">
                    <Form.Label>Where to collect evidence?</Form.Label>
                    <Form.Control 
                    type="url" 
                    placeholder="Enter URL"
                    onChange={e => setVal(e.target.value)}
                    required 
                    />
                    <Form.Text className="text-muted">
                      The URL must start with "https://"
                    </Form.Text>
                  </Form.Group>
                  
                  <div style={{ height: '12px' }} />

                  {!loading ? (
                    <Button className="submitButton" variant="primary" type="submit">
                    Submit
                    </Button>
                  ) : (
                    <Loading />
                  )}

                  <div style={{ height: '20px' }} />
                  </Form>
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