import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Sidebar /> 
      <main className="app-content">
        <header className="app-header">
          <Header />
        </header>
        <section className="content-section">
          {/* sección principal */}
        </section>
      </main>
    </div>
  );
}

export default App;
