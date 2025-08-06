//storing in local storage
// let name = "karthik";
// let age = 18
// localStorage.setItem("name",name)
// localStorage.setItem("age",age)

//getting data from local storage
// let username = localStorage.getItem("name")
// console.log(username)

//removing an item
// localStorage.removeItem("name")

//removing all items
// localStorage.clear()

//storing objects in localstorage

// let user = { name:"karthik",age:21}
// localStorage.setItem("user",JSON.stringify(user))

// // getting objects from localstorage
// let data = JSON.parse(localStorage.getItem("user"))
// console.log(data.age)

// Error handling
//1)
// function showlength(str) {
//   if (typeof str !== "string") {
//     throw new Error("You must provide a string");
//   }
//   return str.length;
// }

// try {
//   console.log(showlength());
// } catch (err) {
//   console.log(err.message);
// }

// 2)
// const jsonString ='{name: "John", age: 30}'

// try {
//     const data = JSON.parse(jsonString)
//     console.log(data)
// } catch (err) {
//     console.log("not a valid string obj")
// }
//3)
// try{
//     console.log(x)
// }
// catch(error){
//     console.log(error.message)
// }

//4)
function safedivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("cannot divide by 0");
    }
    return a / b;
  } catch (err) {
    console.log("cannot divide by 0");
  }
}

safedivide(10, 0);
