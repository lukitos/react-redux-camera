let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {
    case 'CART_ADD':
      console.log('in cart add >> action.payload=', action.payload);
      return [...state, action.payload];

    default:
      return state;
  }

}
