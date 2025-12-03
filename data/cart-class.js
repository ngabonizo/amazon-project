export class Cart{
  cartItems ;
  #localStorageKey; // the # symbol makes variable private property

 
  constructor(localStorageKey){
    this.#localStorageKey;
    this.#loadFromStorage()
  }

  #loadFromStorage(){
    JSON.parse(localStorage.getItem(this.#localStorageKey));

    if(!this.cartItems){
      this.cartItems = [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: 2
      }
    ];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

addToCart(productId){
   let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if( cartItem.productId === productId ){
      matchingItem = cartItem;
     // console.log('matchingItem:',matchingItem)
      }
    })

    if(matchingItem){
      matchingItem.quantity += 1;
     //console.log('matchingItem: ',matchingItem')
    }else{
      this.cartItems.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: 1
    });
    }
   
    this.saveToStorage();
}

removeFromCart(productId){
  let newCart = [];
  this.cartItems.forEach((cartItem) => {
    if(cartItem.productId === productId){
      return //skip the deleted cartItem
    }else{
      newCart.push(cartItem);
    }
  })
  this.cartItems = newCart;

  this.saveToStorage()
}

 updateDeliveryOption(deliveryOptionId, productId){
  let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if( cartItem.productId === productId ){
      matchingItem = cartItem;
     // console.log('matchingItem:',matchingItem)
      }
    })

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
}

}





const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business')


//let see if the class properties can be accessed outside the class
// cart.#localStorageKey = 'abc'

// moved this code inside constructor
// cart.localStorageKey = 'cart-oop';
// businessCart.loaclStorageKey = 'cart-business'

console.log(cart)
console.log(businessCart)
cart.loadFromStorage();







