// function arr (...rest)
// {
//     console.log(arguments)
//     console.log(typeof arguments)
// }
// arr(1, 2, 3)

// const arguments = ("1") => {

//     console.log(arguments)
// };

// function dec(){
//     var car = "BMW";
//     if (true) {
//         var car = "Honda";
//         console.log("car in if: ", car)
//     };
//     console.log("car out of if: ", car)
// }

// dec()
// console.log(car)

// const a = { name: "Anton", age: 20 }
// function dec(b = a) {
//     console.log(b)
// }
// dec();

// -------------------------
// const animals = [
//   { kind: "Cow", id: 3, food: 100, speed: 10 },
//   { kind: "Dog", id: 2, food: 20, speed: 100 },
//   { kind: "Cat", id: 1, food: 3, speed: 150 },
// ];

// function filterAnimals(filterFunction, animals) {
//     return animals
//         .filter(filterFunction)
//         .sort((animal1, animal2) => animal1.id < animal2.id ? -1 : 1);
// };

// const speedFilter = ({ speed }) => speed > 90;
// const foodFilter = ({ food }) => food > 19;

// console.log(filterAnimals(speedFilter, animals));
// console.log(filterAnimals(foodFilter, animals));

// const multipyNum = (num1, num2) => {
//     if (num2) {
//         return num1 * num2;
//     }
//     return (num2) => num1 * num2
// }
// console.log(multipyNum(2, 3));
// const addNum1 = multipyNum(2)(20);
// console.log(addNum1)

// const array = ["Bob", "Dood", "Cow", "Jone", "Dilan", "Kurt"];
// console.log(array);
// // console.log(array.slice(1, 3))
// const b = "Hello, world!";
// // console.log(Array.isArray(array))
// let i = 1;
// const a = array.forEach((arr) => {
//     console.log(`Hello ${arr} ${i++}`)
//  })


// for (var i = 0; i < 10; i++) {
//     setTimeout(()=>console.log(i),200)
// }


// for (let i = 0; i < 10; i++) {
//     setTimeout(()=>console.log(i), 200)
// }


// for (var i = 0; i < 10; i++) {
//     setTimeout((a)=>console.log(a), 200, i)
// }

// for (var i = 0; i < 10; i++) {
//     const func = () => {
//        var val = i
//         setTimeout(()=>console.log(val),200)
//     }
//     func();
// }

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// };



// console.log(isAdult(5));

// function isValidPassword(password) {
//     const SAVED_PASSWORD = "jqueryismyjam";
//     const isMatch = SAVED_PASSWORD === password;
// return isMatch
// }
// console.log(isValidPassword("jqueryismyjam"))

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// };
// console.log(checkAge(0));


// function checkStorage(available, ordered) {
// const message = (available > ordered) ? "Order is processed, our manager will contact you.":"Not enough goods in stock!"
// return message
// };
// console.log(checkStorage(1000, 130));


// const message = {
//     order: "Order is processed, our manager will contact you.",
//     unorder: "Not enough goods in stock!"
// };

// const checkStorage = (available, ordered) => {
//     const result = available > ordered ? message.order : message.unorder;
//     return result;
// }

// console.log(checkStorage(100, 130));

// function checkStorage(value, order) {
//     let message;
//     if (value > order) {
//         return message = "Not enough goods in stock!"
//     }
     
//     return message="Order is processed, our manager will contact you."
    
// }
 
// console.log(checkStorage(100, 130));

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;


// function plus(a) {
//     a +=2;
//     return a
// }
// console.log(plus(5))

// function minus(a) {
//     a -= 4
//     return a
// }
// console.log(minus(10))

// function umn(a) {
//     a *= 3
//     return a
// }
// console.log(umn(15))

// function del(a) {
//     a /= 10
//     return a
// }
// console.log(del(20))

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//      const totalPrice = pricePerDroid * orderedQuantity;
//  customerCredits = customerCredits - totalPrice;
   
    
//     if (totalPrice > customerCredits) {
//         return message = "Insufficient funds!"
//     }
   
// return message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
// }
// console.log(makeTransaction(3000, 2, 23000))

// function checkPassword(password) {
//     let message;
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     if (password === ADMIN_PASSWORD) {
//     message = "Welcome!"
//     }
//     else if (password === null) {
//     message = "Canceled by user!"
//     }
//     else {
//     message = "Access denied, wrong password!"
//     }
// return message;

// }
// console.log(checkPassword("mangohackzor"))
// console.log(checkPassword(null))
// console.log(checkPassword("jqueryismyjam"))

// function checkStorage(available, ordered){
//     let message;
//     if (ordered === 0) {
//         message = "There are no products in the order!"
//     }
//     else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!"
//     }
//         else {
//             message = "The order is accepted, our manager will contact you"
//     }
//     return message
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));