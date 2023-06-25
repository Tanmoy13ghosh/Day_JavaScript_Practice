// function x(y){
//     return y
    // console.log("x function");
    // console.log(y);
    // y()
// }


// x(function y(){
//     console.log("y function")
// })

// ans = x(10)
// console.log(ans);
// / console.log("arr",x(10));

// setTimeout(()=>{
//     console.log("setTimeout");
// },20000)

// setInterval(()=>{
//     console.log("setInterval");
// },10000)

// const higherOrder = (m) =>{
//     const a = (n) =>{
//         const b = (o)=>{
//             return m*n*o
//         }
//         return b
//     } 
//     return a
// }
// const ans = higherOrder(2)(3)(4)
// console.log(ans);

// arr = [1,2,3,4,5,6,7]
// arr.forEach((element,index) =>{
//     console.log(element,index);

// })

// arr = ["sunday","monday", "tuesday","hi","hello"]
// arr.filter((element) =>{
//     // console.log(element.toUpperCase());
//     console.log(element.includes("day"));
// })

// const a = arr.filter((element => {
//     return element.includes("day")
// }))

// console.log(a);

// const a = arr.filter((element) =>{
//     return(element.match("day"));
// })
// console.log(a);

// const ans = arr.every((element)=>{
//     return(typeof arr ==="object")
// })
// console.log(ans);

// const ans2 = arr.every((element)=> typeof element === "string")
//     // return(typeof arr ==="object")
// console.log(ans2);

const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0,4) // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]