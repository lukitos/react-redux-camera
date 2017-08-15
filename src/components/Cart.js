import React from 'react'

const Cart = (props) => {
  console.log("cart props", props);
  return (
    <div>
      <li className="collection-item">
        {} &nbsp; &nbsp;
        {props.item.title} &nbsp; &nbsp;
        <i className="material-icons tiny">delete</i>
      </li>
    </div>
  )
}

export default Cart;
