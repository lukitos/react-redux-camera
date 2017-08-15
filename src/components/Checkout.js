import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {

  render () {
    console.log('IN Checkout >> this.props=', this.props);
    let allItems = this.props.cart.map(item => {
      return (
        <p key={item.id}>{item.title}</p>
      )
    });
    return (
      <div className="container">
        <h3>Checkout</h3>
        {allItems}
      </div>
    )
  }

}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Checkout);
