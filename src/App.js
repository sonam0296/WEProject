import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Layout/Home';
import PortFolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact Us/Contact';
import About from './Components/About-Us/About';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/portfolio" component={PortFolio} />
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
      </Switch>

    </Router>

  );
}

export default App;
