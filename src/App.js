import './App.css';
import TopNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';

function App() {
  return (
    <body class="d-flex flex-column min-vh-100 bg-grey">
      <header>
        <TopNavbar/>
      </header>

      <hr/><hr/>
      <Homepage/>

      <Footer/>
    </body>
  );
}

export default App;
