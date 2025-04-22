
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarbonCalculator from '../components/CarbonCalculator';

const Calculator = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container-section py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Carbon Footprint Calculator</h1>
        <CarbonCalculator />
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
