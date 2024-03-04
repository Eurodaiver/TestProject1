import './App.css';
import logo from './logo.svg';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div>
          Test project IT Expert
        </div>
        <Button className='my-3' href='https://github.com/Eurodaiver/TestProject1' target='_blank' variant="outlined" startIcon={<GitHubIcon />}>
          View source code
        </Button>
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
