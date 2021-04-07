import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Layout/Home';
import PortFolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact Us/Contact';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/portfolio" component={PortFolio} />
        <Route path="/contact" component={Contact}/>
      </Switch>

    </Router>

  );
}

export default App;
