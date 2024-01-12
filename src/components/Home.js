import React from 'react';
import './styles/Home.css';
import Sidebar from './Sidebar';
import Header from './Header';
import SongFeed from './SongFeed';


function Home(){
    return(
      <div className="app">
      <Sidebar /> 
      <main className="app-content">
        <header className="app-header">
          <Header />
        </header>
        <div className="app-body">
          <SongFeed />
        </div>
      </main>
      </div>
    );
  }
  export default Home;