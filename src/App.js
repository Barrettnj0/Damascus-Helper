// React imports
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  Navigate as Redirect
} from "react-router-dom";
import Calculators from "./Components/Calculators";

// Stylesheet
import './Stylesheets/App.css';

// Website Routing Functionality
function App() {
  return (
    <div>
      <Router>
        <div className='router'>
          <nav className='navbar'>
            <ul className='navbar-listings'>
                <Link className='link' to="/Damascus-Helper/">Home</Link>
                <Link className='link' to="/Damascus-Helper/calculators">DPS Calculators</Link>
                <Link className='link' to="/Damascus-Helper/users">TBD</Link>
            </ul>
          </nav>

          <Switch>
            <Route path="/" element={<Redirect replace to="/Damascus-Helper/" />} />
            <Route path="/Damascus-Helper/calculators" element={ <Calculators/> } />
            <Route path="/Damascus-Helper/users" element={ <Users/> } />
            <Route path="/Damascus-Helper/" element={ <Home/> } />
          </Switch>
        </div>
      </Router>
    </div>
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
