import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import SongFeed from './SongFeed'

function AppContent () {
    return (
    <main className="app-content">
        <Sidebar />
        <div className="app-body">
            <header className="app-header">
                <Header />
            </header>
          <SongFeed />
        </div>
      </main>
    );
}

export default AppContent;
