// export const fetchCartItems = () => {
//   return {
//     type: 'CART_FETCH',
//     payload:
//   }
// }

export const addToCart = (camera) => {
  return {
    type: 'CART_ADD',
    payload: camera
  }
}
