import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar /> 
      <main className="app-content">
        <header className="app-header">
          {/* navbar */}
        </header>
        <section className="content-section">
          {/* sección principal */}
        </section>
      </main>
    </div>
  );
}

export default App;
