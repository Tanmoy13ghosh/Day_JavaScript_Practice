const obj =[
    {
        name:"tanmoy",
        age:24
    },
    {
        name:"tmoy",
        age:25
    },
    {
        name:"tany",
        age:26
    },
    {
        name:"tanm",
        age:27
    }
]

const filterarr =obj.filter((element)=>{
    if(element.age>=26){
        console.log(element,"big");
        return element
    }
    else console.log(element,"small");

})
console.log(filterarr);