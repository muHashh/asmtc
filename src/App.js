import './App.css';
import TopNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <header>
        <TopNavbar/>
      </header>

      <Homepage/>

      <Footer/>
    </div>
  );
}

export default App;
