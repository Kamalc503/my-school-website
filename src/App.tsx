import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import ValuesSection from './components/ValuesSection';
// import AcademicsSection from './components/AcademicsSection';
// import FacilitiesSection from './components/FacilitiesSection';
// import EventsSection from './components/EventsSection';
// import AdmissionsSection from './components/AdmissionsSection';
// import ContactSection from './components/ContactSection';
// import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* <ValuesSection />
      <AcademicsSection />
      <FacilitiesSection />
      <EventsSection />
      <AdmissionsSection />
      <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default App;
