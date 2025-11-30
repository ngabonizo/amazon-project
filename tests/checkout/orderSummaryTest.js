import {renderOrderSummary} from '../../data/checkout/orderSummary.js';
import {addToCart, cart, loadFromStorage} from '../../data/cart.js';



describe('test suite: renderOrderSummary', () => {
  it('display the cart', () => {
    document.querySelector('.js-test-container').innerHTML = `
      <div class="order-summary"></div>
    `;


    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    // renderOrderSummary renders cartItems from cart, so we have to mock a cart which we get our cartItems for our tests
    spyOn(localStorage, 'getItem').and.callFake(() => {
          return JSON.stringify([
    {
      productId: productId1,
      quantity: 1,
      deliveryOptionId: 2
    }
  ]); 
 })
   loadFromStorage();

   renderOrderSummary();
  
  expect(cart.length).toEqual(1) //one item in cart
  expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1)// one item displayed on page
  expect(
    document.querySelector(`.js-product-quantity-${productId1}`).innerText
  ).toContain('Quantity: 1');

  document.querySelector('.js-test-container').innerHTML = '' // this removes html from test page so as to reduce congetion on screen
  })


  it('removes a product', () => {

   spyOn(localStorage, 'setItem'); // mock localStorage so as not to modify it when we click delete who's function updates localStorage

    document.querySelector('.js-test-container').innerHTML = `
      <div class="order-summary"></div>
      <div class="payment-summary"></div>
    `;



    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    // renderOrderSummary renders cartItems from cart, so we have to mock a cart which we get our cartItems for our tests
    spyOn(localStorage, 'getItem').and.callFake(() => {
          return JSON.stringify([
    {
      productId: productId1,
      quantity: 1,
      deliveryOptionId: 2
    }
  ]); 
 })
   loadFromStorage()

   renderOrderSummary()

   document.querySelector(`.js-delete-link-${productId1}`).click(); // the click() click the delete link and therefore removes the only product in cart

   expect(
    document.querySelectorAll('.js-cart-item-container').length
   ).toEqual(0)// the cart now is empty therefore js-cart-item-container is empty
   
   expect(
    document.querySelector(`.js-cart-item-container-${productId1}`)
   ).toEqual(null) // this is a check to see if after deleting the product is removed
   
  //  expect(
  //   document.querySelector(`.js-cart-item-container-${productId1}`)
  //  ).not.toEqual(null) this  test fails because product was deleted

  expect(cart.length).toEqual(0); // text to check if cart is updated after delete

  document.querySelector('.js-test-container').innerHTML = ''// removes test html as we nolonger need after testing id done
  })
})