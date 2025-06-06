export const cart = [];
export function addToCart(productId){
   let matchingItem;

    cart.forEach((cartItem) => {
      if( cartItem.productId === productId ){
      matchingItem = cartItem;
      console.log('matchingItem:',matchingItem)
      }
    })

    if(matchingItem){
      matchingItem.quantity += 1;
      console.log('quantity:',matchingItem.quantity)
    }else{
      cart.push({
      productId: productId,
      quantity: 1
    });
    }

}
