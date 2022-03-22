
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Shop />
    <Contact />
    <Footer />
    
    </div>
  );
}

export default App;
