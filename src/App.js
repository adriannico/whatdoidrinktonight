import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/pages/HomePage/About"
import Random from "./components/pages/HomePage/Random"




function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/Random' component={Random} />
        <Route exacy path='/About' component={About} />
      </Switch>

    
    </Router>
  );
}

export default App;
