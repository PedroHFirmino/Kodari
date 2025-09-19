// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import {Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
        <Home />
        {/* <Precos />
        <Blog />  */}
      <Footer/>
    </div>
    
  );
}

export default App;
