
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarbonTracker from '../components/CarbonTracker';
import RecommendationPanel from '../components/RecommendationPanel';
import SustainabilityScore from '../components/SustainabilityScore';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <div className="container-section">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Sustainability Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CarbonTracker />
            </div>
            <div>
              <SustainabilityScore />
            </div>
          </div>
          
          <div className="mt-8">
            <RecommendationPanel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
