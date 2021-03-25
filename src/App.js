import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Layout/Home';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>

    </Router>

  );
}

export default App;
