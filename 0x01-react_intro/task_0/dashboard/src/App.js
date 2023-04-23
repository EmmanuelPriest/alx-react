import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header>
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      </header>
      <body>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </div>
      </body>
      <footer>
      <div className="App-footer">
        <p>
          Copyright 2020 - holberton School
        </p>
      </div>
      </footer>
    </>
  );
}

export default App;
