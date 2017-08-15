import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Checkout from './Checkout';

class Main extends Component {

  render () {
    return (
      <Router>

        <div>

          <nav>
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Checkout}/>

        </div>

      </Router>
    )
  }
}

export default Main;
