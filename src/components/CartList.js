import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Cart from './Cart';

const CartList = (props) => {
  // console.log('IN CartList >> props=', props.cart);
  let allItems = props.cart.map(item => {
    return (
      <Cart key={item.id} item={item} />
    )
  });
  return (
    <div className="row">
      <div className="col s12">
        <div className="card-panel teal">
          <span className="white-text"><h5>Your Cart</h5></span>
          <ul className="collection">
            {allItems}
          </ul>
          <span className="white-text">
            <p>Subtotal:</p>
            <p>Tax:</p>
            <h5>Total:</h5>
          </span>
          <br />
          <Link to="/cart" className="waves-effect waves-light btn">Checkout</Link>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CartList);
