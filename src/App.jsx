import Topbar from './components/Topbar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Work from './components/Work';
import Tbd from './components/Tbd';
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Topbar />
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