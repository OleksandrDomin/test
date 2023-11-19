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

const multipyNum = (num1, num2) => {
    if (num2) {
        return num1 * num2;
    }
    return (num2) => num1 * num2
}
console.log(multipyNum(2, 3));
const addNum1 = multipyNum(2);
console.log(addNum1(20))
