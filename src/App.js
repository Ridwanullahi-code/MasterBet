import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prediction from './pages/Prediction'
import Result from './pages/Result'
import About from './pages/About'
import Message from './pages/Message'
import Admin from './pages/Admin';
import Predict from './Admin/Predict'
import Results from './Admin/Results';

function App() {
  return (
    <div className="box-sizing:border-box">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/admin" element={<Admin />}>
          <Route path='predict' element={<Predict />} />
          <Route path='result' element={<Results />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
