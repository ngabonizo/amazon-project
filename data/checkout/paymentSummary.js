import {cart} from '../cart.js';
import {getProduct} from '../products.js';
import{getDeliveryOption} from '../deliveryOptions.js'
import {moneyFormat} from '../utils/money.js';



export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0
 

   cart.forEach((cartItem) => {
      const product = getProduct(cartItem.productId)
      productPriceCents += product.priceCents * cartItem.quantity;

      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents += deliveryOption.priceCents;
      
   });
       
  const totalBeforeTaxCents = productPriceCents + shippingPriceCents
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents

  const paymentSummaryHTML = `
       <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${moneyFormat(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${moneyFormat(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${moneyFormat(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${moneyFormat(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${moneyFormat(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `;

  document.querySelector('.payment-summary').innerHTML = paymentSummaryHTML;
}
