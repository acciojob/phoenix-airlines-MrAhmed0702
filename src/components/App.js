
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from "./Landing";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";
import FlightSearch from "./FlightSearch";
const App = () => {
  return (
     <Router>
     
    <div>
        {/* Do not remove the main div */}
    
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/flight-search" component={FlightSearch} />
          <Route path="/flight-booking" component={FlightBooking} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
    </div>
  </Router>
  )
}

export default App;
