import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SixteenNew from './pages/NewSix';
import SixProgressor from './pages/SixPregressor';
import StartPage from './pages/StartPage';
import MultiStepForm from './components/FormLogic';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/he-pre-enrolment-form" element={<MultiStepForm />} />
          {/* <Route path="/he-form" element={<HForm1 />} /> */}
          <Route path="/fe-six-new" element={<SixteenNew />} />
          <Route path="/fe-six-progressor" element={<SixProgressor />} />
          <Route path="/he-start" element={<StartPage />} />
          {/* <Route path="/he-pagetwo" element={<HTwo />} />
          <Route path="/he-pagethree" element={<HThree />} />
          <Route path="/he-pagefour" element={<HFour />} />
          <Route path="/he-pagefive" element={<HFive />} />
          <Route path="/success" element={<HSuccess />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

