import React from 'react';
import './styles/Home.css';

import AppContent from './AppContent';
import Footer from './Footer';

function Home(){
    return(
      <div className="app">
        <AppContent />
        <Footer />
      </div>
    );
  }
  export default Home;