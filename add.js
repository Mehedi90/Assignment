'use strict'
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
addToCartButtonsDOM.forEach(addToCartButtonDOM =>{
	addToCartButtonDOM.addEventListener('click',() => {
	const productDom = addToCartButtonDOM.parentNode;
	const product = {
	
	name:productDom.querySelector('.product-name').innerText,
	price:productDom.querySelector('.product-price').innerText,
};

      cartDOM.insertAdjacentHTML('beforeend', `
        <div class="cart-item">
          
          <h3 class="class-item-name">${product.name}</h3>
          <h3 class="class-item-price">${product.price}</h3>
        </div>
      `);
});
});  