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
