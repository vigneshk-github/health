import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Team from './Components/Team/Team.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
