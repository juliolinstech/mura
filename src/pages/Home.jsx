import Footer from '../components/Footer';
import InputFile from '../components/InputFile';
import Header from '../components/Header';

function Home() {
    return (
        <div className="App">
          <Header selection="home" />
        <header className="App-header">
        <h2 className="text-center pt-5 pb-2">Home</h2>
          <InputFile />
        </header>
        <Footer />
      </div>
    );
}
export default Home;