const product = { price: 5, quantity: 2 };
let total = 0;
let effect = () => (total = product.price * product.quantity);
effect();

console.log(total); // --> 10
product.quantity = 3;
console.log(total); // --> 10
