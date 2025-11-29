import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart', () => {
  // spyOn(localStorage, 'getItem').and.callFake(() =>{
  //   return JSON.stringify([]);
  // })
  //     console.log(localStorage.getItem('cart'))
  //     loadFromStorage();

  it('adds an existing product to the cart',() =>{
    //mocks only last for only one test
     spyOn(localStorage, 'setItem');

     spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]); 
    })
    loadFromStorage();


     addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');                 
    expect(cart[0].quantity).toEqual(2); 
  }); 

  it('adds a new product to Cart', () => {

    spyOn(localStorage, 'setItem'); //fake version of setItem so that addToCart doesn't modify our cart from testing code

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]); 
    })
   
    loadFromStorage();

     addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
       expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1); // failing text
  })
}) 