import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import CryptoJS from 'crypto-js';
import Loading from '../components/Loading';
import CustomAlert from '../components/CustomAlert';

function Verification() {

    const [customAlert, setCustomAlert] = useState({
      show: false,
      success: true,
      message: '',
    });

    const [hash, setHash] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitHandler = (event) => {
      event.preventDefault();

      setLoading(true);

      console.log("Hash", hash);
      const url = 'https://a3i80smzda.execute-api.us-east-1.amazonaws.com/lookup?' + new URLSearchParams({hash});

    fetch(url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }})
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setLoading(false);
      if (data['isRegistered']) {
        setCustomAlert({
          show: true,
          success: true,
          message: `Sucess! Mura registered this report on ${data['timestamp']}`,
        });
      } else {
        setCustomAlert({
          show: true,
          success: false,
          message: "Error! Mura did not register this report.",
        });
      }
    })
    .catch((error) => {
      setLoading(false);
      setCustomAlert({
        show: true,
        success: false,
        message: "Error",
      });
      console.log(error.response);
    });
    };

    const updateHash = (file) => {
      if (file === undefined) {
        return;
      }
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function() {
          let file_result = this.result;

          let file_wordArr = CryptoJS.lib.WordArray.create(file_result);
          let sha256_hash = CryptoJS.SHA256(file_wordArr);
          setHash(sha256_hash.toString());
      }
    };


    return (
        <div className="App">
          <Header selection="verification" />
        <header className="App-header">
        <CustomAlert
          customAlert={customAlert}
          setCustomAlert={setCustomAlert}
        />
          <h2 className="text-center pt-5 pb-4">Evidence Verification</h2>
          <h4 className="text-center pt-3 pb-2">Check if a report was registered on the Blockchain by Mura</h4>
          <div className="pt-5"></div>

          <Container fluid>
            <Row>
              <Col sm={4} />
              <Col sm={4} className="borderedDiv" >

              <div className="pt-4" />
              <Form onSubmit={submitHandler} >
              <div style={{ height: '20px' }} />
              <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select a report generated by Mura</Form.Label>
              <Form.Control type="file" accept="application/pdf" required onChange={e => updateHash(e.target.files[0])} />
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
export default Verification;