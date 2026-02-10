// function add(numbers){
//     // return a+b+c;
//     let total=0;
//     for(let i=0; i<numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(add([1,2,3,4]));


// function add(...numbers){    // rest operator -> ...
//     // return a+b+c;
//     let total=0;
//     for(let i=0; i<numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));


// function add(...numbers){    // rest operator -> ...
//     // return a+b+c;
//     let total=0;
//     for(let i in numbers){      // Another version of for loop
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));


// function add(...numbers){    // rest operator -> ...
//     // return a+b+c;
//     let total=0;
//     for(let i of numbers){      // Another version of for loop
//         total += i;
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));


// let arr=[1,2,3,4,5];
// let [first, sec, last]=arr;
// console.log(first, sec, last);


// let arr=[1,2,3,4,5];
// let [first, sec, ...last]=arr;
// console.log(first, sec, last);


// let arr1=[10, 20, 30];
// let arr2=[...arr1];
// console.log(arr2);


// function test(...args){
//     console.log(args);
// }
// let arr=[1, 2, 3];
// test(...arr);


// const isEven = (num) => {
//     if(num % 2 == 0) {
//         return "Even";
//     } 
//     else{
//         return "Odd";
//     }
// };
// console.log(isEven(10));
// console.log(isEven(5));


// const reverseString = (str) => {
//     let s="";
//     for(let i=str.length-1; i>=0; i--){
//         s += str[i];
//     }
//     return s;
// }
// console.log(reverseString("NITIN"));


const avgMarks = (arr) => {
    let sum=0;
    for(let i of arr){
        sum += i;
    }
    return sum;
}
let arr=[10, 20, 30];
let ans=avgMarks(arr);
if(ans >= 40) console.log("Pass");
else console.log("Fail");