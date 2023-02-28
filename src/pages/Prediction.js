import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Predict from '../components/Predict';

const Prediction = () => {

  return (
    <div className="bg-gray-100">
      <Navbar />
      <h1 className="text-center font-bold text-2xl py-5">Uk49 Prediction for today</h1>
      <div className='py-5 grid grid-flow-row-dense'>
        <Predict />
      </div>
      <div className="mx-10 md:mx-40">
        <Input />
      </div>
    <Footer />
    </div>
  )
}

export default Prediction
