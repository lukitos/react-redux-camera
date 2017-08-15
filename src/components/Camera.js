import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAction from '../actions/cart';

const Camera = (props) => {
  // console.log('IN Camera >> props=', props);
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={props.camera.image} alt="camera" />
              <span className="card-title">{props.camera.title}</span>
            </div>
            <div className="card-content">
              <p>{props.camera.title}</p>
              <p>Price: ${props.camera.price}</p>
              <p>Rating: {props.camera.rating}</p>
            </div>
            <div className="card-action">
              <a onClick={() => props.cartAction.addToCart(props.camera)}>Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    cartAction: bindActionCreators(cartAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Camera);
