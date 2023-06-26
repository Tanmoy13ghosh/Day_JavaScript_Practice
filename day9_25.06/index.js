// console.log(a);
// let a = 10

// function display(){
//     console.log("and");
//     console.log(display)
// }

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
