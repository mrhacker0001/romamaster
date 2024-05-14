import './App.css';
import Carousel from './Components/Carusel';
import Firstsection from './Components/Firstsection';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Secondsection from './Components/Secondsection';
import Thirdsection from './Components/Thirdsection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
