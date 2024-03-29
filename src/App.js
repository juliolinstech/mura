// import logo from './logo.svg';
import './App.css';

import {Amplify, API} from "aws-amplify";

import Home from './pages/Home';
import Collection from './pages/Collection';
import Verification from './pages/Verification';
import FAQ from './pages/FAQ';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


Amplify.configure({
  API: {
    endpoints: [
      {
        name: "MuraAPIGatewayAPI",
        endpoint:
          "https://a3i80smzda.execute-api.us-east-1.amazonaws.com",
      },
    ],
  },
});

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route exact path="/" element={<Home />} />

        {/* Evidence Collection Page */}
        <Route exact path="/collection" element={<Collection />} />

        {/* Hash Verification Page */}
        <Route exact path="/verification" element={<Verification />} />
          
        {/* FAQ Page */}
        <Route exact path="/FAQ" element={<FAQ />} />

      </Routes>
    </Router>
  );
}

export default App;