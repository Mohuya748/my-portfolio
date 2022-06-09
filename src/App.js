
import './App.css';
import Home from './Home/Home';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
    <Navbar>
    <Home></Home>
    </Navbar>
  
    <Footer></Footer>
    </div>
  );
}

export default App;
