import {cart} from './cart.js';/*if cart.js and amazon.js in different folders: '../data/cart.js' */
let productHTML = '';


products.forEach((product) => {

  productHTML +=
   `
   <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}"></div>
        <div class="product-name-container js-product-name-container">${product.name}</div>
      <div class="product-rating-container">
        <img src="images/ratings/rating-${product.rating.stars * 10}.png " class="product-rating-image">
        <div class="product-count">${product.rating.count}</div>
      </div>
      <div class="product-price-container">$${product.priceCents / 100}</div>
      <div class="product-quantity-container">
        <select class="select-button">
          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="added-to-cart-message"></div>
      <button class="add-to-cart-button js-add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
      </div>
  ` 
});

 document.querySelector('.js-grid-container').innerHTML = productHTML;

 document.querySelectorAll('.js-add-to-cart-button').forEach((button) =>{
  button.addEventListener('click',() => {
    const productId = button.dataset.productId;

   let matchingItem;

    cart.forEach((item) => {
      if(productId === item.productId){
      matchingItem = item;
      }
    })

    if(matchingItem){
      matchingItem.quantity += 1;
    }else{
      cart.push({
      productId: productId,
      quantity: 1
    });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });


    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  })
 })

 
