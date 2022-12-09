// external imports
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

// internal imports
import Home from './pages'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
