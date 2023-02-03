///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const sumCart = (acc, curr) => {
    return acc + curr.price
  }

const total = cart.reduce(sumCart, 0)
console.log(total)


  
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    const calculatedTax = cartTotal * tax
    const subTotal = cartTotal + calculatedTax
    const finalPrice = subTotal - couponValue
  
    return finalPrice
  }
  
  console.log(calcFinalPrice(69, 5, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

A customer object can have the following properties:

name: string (This is stored so the indivdual customer can be identified and information around this customer is easier to reference to)
email: string (Can be used to send messages about the restaraunt, such as future deals or holiday closures)
address: string (This is stored so it can be referenced to when delivering food to the customer)
phoneNumber: number (This can be used in case something goes wrong with the order or something sells out)

The name and address are stored as strings because they are a combination of letters, and for the address, numbers as well.
The email is a string because it can use numbers, letters and special characters such as '@'
the phoneNumber is a number because an actual phone number relies only on actual numbers.



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'Carl',
    email: 'Carllworks@gmail.com',
    address: '2312 greenhill dr',
    phoneNumber: 4204206969
}

console.log(customer)