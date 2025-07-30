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

let user = { name:"karthik",age:21}
localStorage.setItem("user",JSON.stringify(user))

// getting objects from localstorage
let data = JSON.parse(localStorage.getItem("user"))
console.log(data.age) 