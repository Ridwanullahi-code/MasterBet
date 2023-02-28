import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prediction from './pages/Prediction'
import Result from './pages/Result'
import About from './pages/About'
import Message from './pages/Message'
import Layout from './admin/layout';
import Dashboard from './admin/scene/Dashboard';
import Predict from './admin/scene/Predict';
import HomePredict from './admin/scene/Result';
import User from './admin/scene/User';

function App() {
  return (
    <div className="box-sizing:border-box">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='phone' element={<User />} />
            <Route path='predict-1' element={<Predict />} />
            <Route path='predict-2' element={<HomePredict /> } />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
