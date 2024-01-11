import React from 'react';
import './styles/Home.css';
import Sidebar from './Sidebar';
import Header from './Header';

function Home(){
    return(
      <div className="app">
      <Sidebar /> 
      <main className="app-content">
        <header className="app-header">
          <Header />
        </header>
      </main>
      </div>
    );
  }
  export default Home;