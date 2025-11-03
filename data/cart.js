// this get the cart from localStorage. JSON turns it back from string form because localeStorage only accepts strings

export let cart = JSON.parse(localStorage.getItem('cart'));

//if there is not cart in localeStorage. Like when we first access the app, cart is null because of localStorage. So lets set cart default values
if(!cart){
   cart = [
 
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
   }
];
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
      quantity: 1
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
}


