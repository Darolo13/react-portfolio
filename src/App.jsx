// components
import Topbar from './components/Topbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Work from './components/Work';
import Tbd from './components/Tbd';
import Contact from './components/Contact'

// style 
import './app.scss'

import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Tbd />
        <Contact />

      </div>
    </div>
  );
}

export default App;