import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import About from "./components/pages/HomePage/About"
import Random from "./components/pages/HomePage/Random"
import Home from "./components/pages/HomePage/Home"
import Search from "./components/pages/HomePage/Search"
import DrinkView from "./components/pages/HomePage/DrinkView"
import IngredientView from "./components/pages/HomePage/IngredientView"
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Nav} from 'react-bootstrap';
import {Container, Row, Col} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';






function App() {
  return (
    <Router>
      {/* <NavBar/> */}
      <Navbar bg="navbar-color">
        <Link to="/Home"><Navbar.Brand className="logo">WDIDT</Navbar.Brand></Link>
        <Nav>
          <Link to="/Home">Home</Link>
         </Nav>
        <Nav>
          <Link to="/Search">Search</Link>
        </Nav> 
        
      </Navbar>
      
      
      
      <Switch>
        <Route exact path='/Random' component={Random} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Search' component={Search} />
        <Route exact path='/DrinkView/:id' component={DrinkView} />
        <Route exact path='/IngredientView/:id' component={IngredientView} />
        <Redirect to="/Home" /> 
      </Switch>

    </Router>
  );
}

export default App;
