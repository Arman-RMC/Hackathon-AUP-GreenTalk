import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import TechStackSection from '../components/TechStackSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Carboncalculator from '../components/ui/carbonCalculator';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [storedUsers, setStoredUsers] = useState<{ name: string; email: string; password: string; mobile: string }[]>([]);
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = () => {
    if (isSignup) {
      const exists = storedUsers.some(user => user.email === email);
      if (!exists) {
        setStoredUsers([...storedUsers, { name, email, password, mobile }]);
        alert('Signup successful! Please login.');
        setIsSignup(false);
        setName('');
        setEmail('');
        setPassword('');
        setMobile('');
      } else {
        alert('User already exists. Please login.');
      }
    } else {
      const match = storedUsers.find(user => user.email === email && user.password === password);
      if (match) {
        setIsLoggedIn(true);
      } else {
        alert('Invalid credentials.');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
    setEmail('');
    setPassword('');
    setMobile('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border-2 border-green-500">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
            {isSignup ? '🌿 GreenTalk Signup' : '🌿 GreenTalk Login'}
          </h2>
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAuth}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg mb-3"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
          <p className="text-center text-sm text-gray-600">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              className="text-green-600 underline hover:text-green-800"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center px-6 py-3 bg-white shadow-sm border-b">
        <Navbar />
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer text-sm text-green-700 font-medium">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">👤 {email.split('@')[0]}</div>
          </div>
          <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg hidden group-hover:block">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <main>
        <HeroSection />
        <Carboncalculator />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
