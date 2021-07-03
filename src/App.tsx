import Tours from './components/tours/Tours';
import './App.css';
import logo from './assets/Sixt_logo.png';

function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <div className="header_logo">
          <img src={logo} alt="Sixt Car Rental Logo" height="50px" />
        </div>
        <div className="header_text">
          <h2>Sixt Chauffeured Services</h2>
        </div>
      </div>
      <Tours />
    </div>
  );
}

export default App;
