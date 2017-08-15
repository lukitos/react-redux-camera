import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cameraAction from './actions/cameras';

import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

class App extends Component {

  render() {
    // console.log('IN App >> this.props=', this.props);
    return (
      <div>
        <Main />
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cameraAction: bindActionCreators(cameraAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
