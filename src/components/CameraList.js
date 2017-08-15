import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as cameraAction from '../actions/cameras';
import Camera from './Camera';

const CameraList = (props) => {
  // console.log('IN CameraList >> props=', props);
  let allCameras = props.cameras.map(camera => {
    return (
      <Camera key={camera.id} camera={camera} />
    )
  });
  return (
    <div>{allCameras}</div>
  )
}

function mapStateToProps(state, props) {
  return {
    cameras: state.cameras
  }
}

export default connect(mapStateToProps, null)(CameraList);

// function mapDispatchToProps(dispatch) {
//   return {
//     cameraAction: bindActionCreators(cameraAction, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(CameraList);
