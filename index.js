var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 var object = {[itemName]:itemPrice};
 cart.push(object);
 console.log (`${itemName} has been added to your cart.`);
 return cart
}
addToCart("bananas")
addToCart("oranges")
addToCart("cheese")
addToCart("pear")
console.log(cart[0])
console.log(cart)


   function viewCart() {
    var i = 0;
    var emptyArray=[];
    for (i=0; i < cart.length; i++){
      emptyArray.push(` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`)}
  if (cart.length > 2) {
       console.log ("In your cart, you have"+ emptyArray.slice(0, emptyArray.length - 2)+ "," + emptyArray[cart.length - 2] + ", and" + emptyArray[cart.length-1]+ ".")
  } else if (cart.length > 1){
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
    
  } else if (cart.length > 0){
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
    } else {
      console.log ('Your shopping cart is empty.')
    }
  }
  viewCart()
  
 
 /* function viewCart() {
    var i = 0;
  if (cart.length > 1) {
    
    for (i=0; i < cart.length - 1; i++){
     x = (`${Object.keys(cart[i])} at ${Object.values(cart[i])}, `) }
     console.log ('In your cart, you have'+ x + )
    console.log (`and ${Object.keys(cart[cart.length - 1])} at ${Object.values(cart[cart.length - 1])}.`) 
  } else if (cart.length > 0){
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
    } else {
      console.log ('Your shopping cart is empty.')
    }
  }
*/
function total() {
  var x = 0
  var i = 0
  for (i=0; i < cart.length; i++){
   x = x + parseInt(Object.values(cart[i]))
  }
  return x
}
total()

 function removeFromCart(item) {
  var i = 0;
  for (i = 0; i < cart.length; i++) {
   if (cart[i].hasOwnProperty(item)) {
     
     return cart
     
   } else {
     console.log ("That item is not in your cart.")
     return cart}
  }
}

removeFromCart("oranges")

function placeOrder(cardNumber) {
  // write your code here
}
