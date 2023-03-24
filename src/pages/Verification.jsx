import Footer from '../components/Footer';
import InputFile from '../components/InputFile';
import Header from '../components/Header';

function Verification() {
    return (
        <div className="App">
          <Header />
        <header className="App-header">
          <h2 className="text-center pt-5 pb-4">Evidence Verification</h2>
          <h4 className="text-center pt-3 pb-2">Check if a report was registered on the Blockchain</h4>
          <div className="pt-5 pb-2"></div>
          <InputFile />
        </header>
        <Footer />
      </div>
    );
}
export default Verification;