import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import './app.css';
import Footer from "./components/Footer";


function App() {
  
  return (
    <div>
      <Header />
      <main>
        <AboutMe></AboutMe>
      </main>
      <Footer />
    </div>
  );
}

export default App;
