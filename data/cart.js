// this get the cart from localStorage. JSON turns it back from string form because localeStorage only accepts strings
export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')); //get the cart from localStorage

  //if there is not cart in localeStorage. Like when we first access the app, cart is null because of localStorage. So lets set cart default values
  if(!cart){
    cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      deliveryOptionId: 2
    }
  ];
  }
}


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
   let matchingItem;

    cart.forEach((cartItem) => {
      if( cartItem.productId === productId ){
      matchingItem = cartItem;
     // console.log('matchingItem:',matchingItem)
      }
    })

    if(matchingItem){
      matchingItem.quantity += 1;
    //  console.log('quantity:',matchingItem.quantity)
    }else{
      cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: 1
    });
    }
   
    saveToStorage();
}

export function removeFromCart(productId){
  let newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      return //skip the deleted cartItem
    }else{
      newCart.push(cartItem);
    }
  })
  cart = newCart;

  saveToStorage()
};

export function updateDeliveryOption(deliveryOptionId, productId){
  let matchingItem;

    cart.forEach((cartItem) => {
      if( cartItem.productId === productId ){
      matchingItem = cartItem;
     // console.log('matchingItem:',matchingItem)
      }
    })

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

