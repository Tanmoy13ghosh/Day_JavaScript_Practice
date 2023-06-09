// const obj = {
//     key5:"abcd",
//     key5:"xyz"
// }
// console.log(obj);

// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// }
// console.log(obj1);
// console.table(obj1)

// const details ={
//     name:"tanmoy",
//     age:24,
//     school:{
//         Higher_Secendary:"sheakhla",
//         Secondary: "singur",
//     },
    // skills: [
    //     'HTML',
    //     'CSS',
    //     'JavaScript',
    //     'React',
    //     'Node',
    //     'MongoDB',
    //     'Python',
    //     'D3.js'
    // ],
//     arrOfObj : [
//         {
//             skills: "java",
//             experience: "2+ yr",
//             erp:"hdbdhdh"
//         },
//         {
//             skills: "java",
//             experience: "2+ yr",
//             erp:"hdbdhdh"
//         },
//         {
//             skills: "java",
//             experience: "2+ yr",
//             erp:"hdbdhdh"
//         },
//     ]
// }
// console.log(details.arrOfObj[0]);

// for (let index = 0; index < details.arrOfObj.length; index++ ){
//     const element = details.arrOfObj[index];
//     console.log(element.skills);
// }

// console.table(details)
// arrOfObj = [
//     {
//         skills: "java",
//         experience: "2+ yr",
//     },
//     {
//         skills: "java",
//         experience: "2+ yr",
//     },
//     {
//         skills: "java",
//         experience: "2+ yr",
//     },
// ]
// console.log(arrOfObj.skills);
// console.table(arrOfObj)

// const obj = {
//     arrOfObjOfArr : [
//         {
//             arr1:[
//                 {
//                     key1:"value1",
//                     key2:"value2"

//                 },
//                 {
//                     key1:"value1",
//                     key2:"value2"

//                 }
//             ],
//         },
//         {
//             arr1:[
//                 {
//                     key1:"value3",
//                     key2:"value4"

//                 }
//             ]
//         }
//     ]
// }
// for(let index = 0; index < obj.arrOfObjOfArr.length;index++){
//     let element = obj.arrOfObjOfArr[index];
//     console.log(element.arr1[1]);
    
// }
// console.log(obj.arrOfObjOfArr[0]);
const hello ={}
hello.newkey = "newvalue"
// console.log(hello);
hello.newarr=[1,2,3]
console.log(hello.newarr[0]);
hello.newarr.push (45)
console.log(hello.newarr);
hello.newobj = {
    key1:"value1"
},
hello.newobj.key2 = "Value2"
console.log(hello.newobj);

let obj ={
    name:"tanmoy",
    age:24,
    school:{
        Higher_Secendary:"sheakhla",
        Secondary: "singur",
    },
}
console.log(obj);
const copyObj = Object.assign(obj)
copyObj.education = "10th"
console.log(copyObj);
console.log(Object.keys(copyObj));
console.log(Object.entries(copyObj));
console.log(copyObj.hasOwnProperty("name"))