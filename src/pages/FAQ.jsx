import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function FAQ() {
    return (
        <div className="App">
        <Header selection="faq" />
        <header className="App-header">
        <div className="pt-5"></div>
        <Container fluid>
        <Row>
        <Col sm={2} />
        <Col sm={8} className="borderedDiv" >
          <h2 className="text-center pt-5">Frequently Asked Questions</h2>
          
          <h3 className="text-center pt-4 pb-2">What is Mura?</h3>
          <p>Mura is a website for digital evidence collection. It is designed to serve public figures and lawyers as they prepare libel lawsuits. The platform is Brazil’s first blockchain-based solution to be both Chain-of-Custody compliant, as required by the Brazilian Criminal Procedure Code, and cost-effective.</p>

          <h3 className="text-center pt-5 pb-2">Why can't I just take a screenshot?</h3>
          <p>
            Screenshots lack the security guarantees required by Criminal Law in Brazil. Because screenshots can be forged, they can't prove the authenticity of the evidence. That is why Mura captures evidence from an isolated environment, ensuring its authenticity and integrity as required by the Brazilian Criminal Procedure Code.
          </p>
          
          <h3 className="text-center pt-5 pb-2">How does Mura work?</h3>
          <p>Mura uses a headless browser to generate a PDF of a target web page from a sandbox environment, appending additional metadata to create a technical report of the collected evidence. Finally, it derives a Solana address from the report’s SHA-256 hash – to which it sends a small amount of SOL, such that the transaction serves as the evidence’s Proof of Existence.</p>

          <h3 className="text-center pt-5 pb-2">How is Mura different from its competitors?</h3>
          <p>Mura could charge the most affordable market rates at R$1 per report. Furthermore, its security guarantees match those of established startups by ensuring the authenticity, integrity, availability, and confidentiality of evidence collected from public domains, which makes it Chain-of-Custody compliant. Mura accomplishes these goals for desktop and mobile versions in a low-latency, self-sufficient application.</p>

          <h3 className="text-center pt-5 pb-2">How can I collect evidence?</h3>
          <p>Go to the Collection page. Fill out the form with the URL of the webpage you want to collect evidence from. <b>The webpage must not require authentication and it should start with https://</b>. Next, click Submit. Mura will generate a report of the webpage and register it on the Blockchain. Finally, you will receive a URL for downloading the report.</p>

          <h3 className="text-center pt-5 pb-2">How can I check the authenticity of evidence?</h3>

          <p> Go to the Verification page and insert a PDF report. Next, click Submit. If the report was registered by Mura, you will receive a success message stating the registration timestamp. Otherwise, you will receive a message saying that the PDF was not registered on the Blockchain by Mura. </p>
          </Col>
          <Col sm={2} />
          </Row>
        </Container>
        <div className="pt-5"></div>
        </header>
        <Footer />
      </div>
    );
}
export default FAQ;