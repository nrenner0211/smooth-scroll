// external imports
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// internal imports
import Home from './pages'
import SignInPage from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Routes>
      <Home />
    </Router>
  );
}

export default App;
