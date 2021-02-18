import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Login /> */}
        <Routes />
      </div>
    </Router>
  );
}

export default App;
