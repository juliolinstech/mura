import Footer from '../components/Footer';
import InputFile from '../components/InputFile';

function Verification() {
    return (
        <div className="App">
        <header className="App-header">
          <h1>Upload a report (PDF)</h1>
          <InputFile />
        </header>
        <Footer />
      </div>
    );
}
export default Verification;