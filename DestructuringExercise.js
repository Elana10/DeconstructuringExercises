//object destructuring 1: 
// console.log(numPlanets) = 8
// console.log(yearNeptunDiscovered) = 1846

//object destructuring 2:  
//   console.log(discoveryYears) = 
//   {yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659}


//object destructuring 3:    
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) = 
// Your name is Alejandro and you like green.
// getUserData({firstName: "Melissa"}) = 
// Your name is Melissa and you like purple.
// getUserData({}) = 
// Your name is undefined and you like purple.


// array destructuring 1
// console.log(first) = 
// Maya
// console.log(second) = 
// Marisa
// console.log(third) = 
// chi

// array destructuring 2
//   console.log(raindrops)= 
//   Raindrops on roses
//   console.log(whiskers) = 
//   whiskers on kittens
//   console.log(aFewOfMyFavoriteThings) =
//   [ "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]

// array destructuring 3
// console.log(numbers) =
// [20,10,30]
// GOT THIS ONE WRONG!! I forgot that array index starts at 0!! 
// CORRECTION: [10,30,20]

// ES5 Assigning Variables to Object Properties
// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
// let {numbers{a},numbers{b}} = obj;
//CORRECTION: let {a,b} = obj.numbers;


// ES5 Array 
// var arr = [1, 2];
// var temp = arr[0];
// [1,2]=[2,1]
//CORRECTION: [arr[0],arr[1]] = [arr[1],arr[0]]

// function raceResults([first, second, third, ...rest]){
//     return {
//         first,
//         second,
//         third,
//         rest
//     }
// }
//COmpared to arrow function! => gives implicit return of the object! 

