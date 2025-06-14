import React from 'react';
import './App.css';
import Header from './components/Header';
import InterviewPage from './pages/InterviewPage';
import InterviewSidebar from './components/InterviewSidebar';
import DisclaimerSection from './components/DisclaimerSection'; // 1. Import the new component
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <InterviewPage />
        <InterviewSidebar />
      </div>
      <DisclaimerSection /> {/* 2. Add it right here */}
      <Footer />
    </div>
  );
}

export default App;