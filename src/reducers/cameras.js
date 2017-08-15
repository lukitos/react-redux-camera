let initialState = [
  {
    id: 1,
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 4,
    price: 369.99,
    onSale: true
  }, {
    id: 2,
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2,
    price: 1099.0,
    onSale: false
  }, {
    id: 3,
    title: 'Nikon D810A',
    image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 3,
    price: 3796.95,
    onSale: true
  }
];
;

export default (state=initialState, action) => {

  switch (action.type) {
    case 'CAMERAS_FILTER':
      // console.log('IN cameras filter >> action.payload=', action.payload);
      let filteredCameras = initialState.filter(camera => camera.title.toLowerCase().includes(action.payload.toLowerCase()));
      return filteredCameras;

    case 'CAMERAS_FETCH':
      // console.log('IN cameras fetch >> action.payload=', action.payload);
      return [...action.payload];

    default:
      return state;

  }

}
