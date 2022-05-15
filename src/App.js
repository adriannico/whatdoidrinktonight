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





function App() {
  return (
    <Router>
      <NavBar/>
      
      <Switch>
        <Route exact path='/Random' component={Random} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Search' component={Search} />
        <Redirect to="/Home" /> 
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
