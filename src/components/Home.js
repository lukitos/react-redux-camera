import React, { Component } from 'react';

import CameraList from './CameraList';
import CartList from './CartList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cameraAction from '../actions/cameras';

class Home extends Component {

  applyFilter(e) {
    e.preventDefault();
    // console.log('IN applyFilter >> e.target.value=', e.target.value);
    this.props.cameraAction.filterCameras(e.target.value);
  }

  render () {
    return (
      <div className="container">
        <h3>Camera Shop</h3>
        <div className="input-field col s9">
          <input
            type="text"
            placeholder="Search here..."
            onChange={this.applyFilter.bind(this)}
          />
        </div>
        <div className="row">
          <div className="col s5"><CameraList /></div>
          <div className="col s2"></div>
          <div className="col s5"><CartList /></div>
        </div>
      </div>
    )
  }

}

// function mapStateToProps(state, props) {
//   return {
//     cameras: state.cameras
//   }
// }
//
function mapDispatchToProps(dispatch) {
  return {
    cameraAction: bindActionCreators(cameraAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Home);
