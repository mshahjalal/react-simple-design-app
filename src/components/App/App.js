//import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div className='container-fluid'>App body here</div>
      <Footer />
    </div>
  );
}

export default App;
