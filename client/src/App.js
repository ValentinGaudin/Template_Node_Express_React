import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then((res) => res.json)
      .then((data) => console.log(data))
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/api/test')
      .then((res) => res.json)
      .then((data) => console.log(data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello you
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
