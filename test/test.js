// function arr (...rest)
// {
//     console.log(arguments)
//     console.log(typeof arguments)
// }
// arr(1, 2, 3)

// const arguments = ("1") => {

//     console.log(arguments)
// }; vopros

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
const animals = [
  { kind: "Cow", order: 3, food: 100, speed: 10 },
  { kind: "Dog", order: 2, food: 20, speed: 100 },
  { kind: "Cat", order: 1, food: 3, speed: 150 },
];

function filterAnimals(filterFunction, animals) {
    return animals
        .filter(filterFunction)
        .sort((animal1, animal2) => animal1.order < animal2.order ? -1 : 1);
};

const funcFilter = ({ speed }) => speed > 90;
console.log(filterAnimals(funcFilter, animals));


