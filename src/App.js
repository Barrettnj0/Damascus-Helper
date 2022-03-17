// React imports
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Calculators from "./Components/Calculators";

// Stylesheet
import './Stylesheets/App.css';

// Website Routing Functionality
function App() {
  return (
    <Router>
      <div className='router'>
        <nav className='navbar'>
          <ul className='navbar-listings'>
              <Link className='link' to="/">Home</Link>
              <Link className='link' to="/calculators">DPS Calculators</Link>
              <Link className='link' to="/users">TBD</Link>
          </ul>
        </nav>

        <Switch>
          <Route path="/calculators" element={ <Calculators/> } />
          <Route path="/users" element={ <Users/> } />
          <Route path="/" element={ <Home/> } />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <span>Click DPS Calculators. The other tabs have no content at the moment but hopefully will be updated soon :)</span>
    </div>
  )
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
