import './App.css';
import logo from './logo.svg';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Test project IT Expert
        </p>
      </header>
      <Task1></Task1>
      <Task2></Task2>
      <Task3></Task3>
      <footer className="footer">
        <p>
          Developed by Aleksei Vasilev
        </p>
      </footer>
    </div>
  );
}

export default App;
