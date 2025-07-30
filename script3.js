//Dom qs

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   const h2 = document.querySelectorAll("#h2");
//   h2.forEach(function (h) {
//     h.style.color = "blue";
//   });
// });

//2) add a div after an element
// const new1 = document.createElement("div")
// new1.textContent = "new div"
// new1.style.backgroundColor = "green"
// const main = document.querySelector("#main")
// main.insertAdjacentElement("afterend",new1)

//3) toggle active
// const p1 = document.querySelector("#p")
// const btn = document.querySelector("#btn")

// btn.addEventListener("click",function(){
//     p1.classList.toggle("active")
// })

//4)validate for non empty adn red border if its empty
// const inp = document.querySelector("input");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   if (inp.value === "") {
//     console.log("empty email");
//     inp.style.border = "1px solid red";
//   } else {
//     console.log(inp.value);
//     inp.style.border = ""
//   }
// });

// 5) remove all the children from parent - one line
// function clearChildren(){
//     document.querySelector("#container").innerHTML = ""
// }

// using a while loop
// function clearChildren(){
//     const container = document.querySelector("#container")
//     while(container.firstChild){
//         console.log(container.firstChild.textContent)
//         container.removeChild(container.firstChild)

//     }
// }

//6) clone card and append it in andother element
// const original =  document.querySelector("#card")
// const clone = document.querySelector("#container")

// let clone1 = original.cloneNode(true);
// clone1.textContent = "cloned card"

// clone.appendChild(clone1)
// clone1.removeAttribute("id")

//7) create a dynamic table
// const users = [
//   { name: "Karthik", age: 21, email: "karthik@example.com" },
//   { name: "Raj", age: 22, email: "raj@example.com" },
//   { name: "Anu", age: 20, email: "au@example.com" },
// ];

// const container = document.querySelector("#container");

// const table = document.createElement("table");
// table.border = "1";
// table.style.borderCollapse = "collapse";

// const thead = document.createElement("thead");
// const tr = document.createElement("tr");

// ["Name", "Age", "Email"].forEach((text) => {
//   const th = document.createElement("th");
//   th.textContent = text;
//   th.style.padding = "8px";
//   tr.appendChild(th);
// });

// thead.appendChild(tr);
// table.appendChild(thead);

// const body = document.createElement("tbody");

// users.forEach((user) => {
//   const row = document.createElement("tr");
//   Object.values(user).forEach((value) => {
//     const td = document.createElement("td");
//     td.textContent = value;
//     td.style.padding = "8px";
//     row.appendChild(td);
//   });
//   body.appendChild(row);
// });

// table.appendChild(body);
// container.appendChild(table);
