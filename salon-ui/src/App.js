import logo from './logo.svg';
import './App.css';
import { Navbar} from 'react-bootstrap';
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >AR Salon and Day Spa</Navbar.Brand>
        </Navbar>
      </div>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
