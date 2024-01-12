import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import SongFeed from './components/SongFeed';

function App() {
  return (
    <div className="app">
      <Sidebar /> 
      <main className="app-content">
        <header className="app-header">
          {/* navbar */}
        </header>
        <section className="content-section">
          <SongFeed />
        </section>
      </main>
    </div>
  );
}

export default App;
