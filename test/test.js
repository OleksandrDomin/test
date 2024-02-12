// "use strict";

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

// function isNumberInRange(start, end, number) {
//  const isInRange = (number>=start && number <=end)
// return isInRange
// };
// console.log(isNumberInRange(10, 30, 20));

// function checkIfCanAccessContent(subType){
//       const canAccessContent = (subType === "vip" || subType === "pro");
//     return canAccessContent;
// };

// console.log(checkIfCanAccessContent("pro"))

// function isNumberNotInRange(start, end, number) {
//     const control = (number >= start && number <= end)
//     const remuveControl = !control
//     return remuveControl
// }
// console.log(isNumberNotInRange(10, 50, 20))

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 2;
//   const SILVER_DISCOUNT = 5;
//   const GOLD_DISCOUNT = 10;
//  let discount;

//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     }
//     if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     }
//     if (totalSpent >= 5000 && totalSpent < 20000) {
//              discount = BRONZE_DISCOUNT;
//     }
//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
//     }

//   return `Your discount is ${discount}%`;
// }
// console.log(getDiscount(500000000));
// console.log(getDiscount(30000));
// console.log(getDiscount(6000));
// console.log(getDiscount(500));

// function checkStorage(available, ordered) {
//     let message;
//     message = (available > ordered) ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
//     return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     message = (password === ADMIN_PASSWORD) ? "Access is allowed" : "Access denied, wrong password!";
//     return message;
// }
// console.log(checkPassword("jqueryismyjam"))
// console.log(checkPassword("jqueryfgffg"))

// function getSubscriptionPrice(type) {
//     let prise;
//     switch (type) {
//         case "starter":
//            prise =  0
//             break;
//         case "professional":
//            prise =  20
//             break;

//           case "organization":
//            prise =  50
//             break;

//         default:
//             prise = "Please enter correct type"
//             break;
//     }
//     return prise;
// }
// console.log(getSubscriptionPrice("organiz"))

// function checkPassword(password) {
//   let message;
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   switch (password) {
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     case null:
//       message = "Canceled by user!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//       break;
//   }
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword(null));
// console.log(checkPassword("jquery"));

// function getShippingCost(country) {
//     let message;
// switch (country) {
//     case "China":
//         message = `Shipping to ${country} will cost 100 credits`
//         break;
//     case "Chile":
//         message = `Shipping to ${country} will cost 250 credits`
//         break;

//     case "Australia":
//         message = `Shipping to ${country} will cost 140 credits`
//         break;

//   case "Jamaica ":
//         message = `Shipping to ${country} will cost 120 credits`
//         break;

//     default:
//         message = "Sorry, there is no delivery to your country";
//         break;
// }

//     return message;
// }
// console.log(getShippingCost("Chinaffffff"));
// console.log(getShippingCost("Chile"));

// **********************************************************************
// console.log(typeof NaN);

// (() => this.x).bind({ x: 5 })
// (() => this.x).bind({ x: 5 })()
// (() => this.x).apply({ x: 5 })
// Jak se může stát XSS útok?

// Čemu se rovná [0, 1, 2, 3, 4].filter(Boolean).filter(x => x % 2 === 1).map(x => x * 2)?

// [1, 3]
// [2, 6]
// [2, 4, 6, 8]
// [0, 2, 6]
// *****************************************************************************

// const petya = {
//     userName: "Petya",
//     showName() {
//         console.log(petya.userName)
//     }
// }
// petya.showName()

// const tolya = {
//     userName: "Tolya",
//     showName() {
//         console.log(this.userName)
//     }
// }
// tolya.showName()

// const bookShelf = {
//   authors: ["John", "Bil", "Drimon"],
//   showAuthor() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };
// console.log(bookShelf.showAuthor());
// bookShelf.addAuthor("Arnold");
// console.log(bookShelf.showAuthor());

// function foo() {
//     console.log(this);
// }
// foo();

function showThis() {
    console.log("This is this", this);
}

showThis();

const user = {
    userName: "Arnold",
};

user.showContext = showThis;
user.showContext();
