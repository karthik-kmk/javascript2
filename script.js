//Easy Questions
//1) To chnage inner text
// var message = document.querySelector("#message");
// var btn = document.querySelector("#button");

// btn.addEventListener("click",function(){
//     message.innerHTML = "Hello world";
// })

//2) change color of div
// var div = document.querySelector("#box");
// var btn = document.querySelector("#button");

// btn.addEventListener("click",function(){
//     div.style.backgroundColor = "lightblue";
// })

//3)to add a new li to ul
// var list = document.querySelector("#mylist");
// var btn = document.querySelector("#button");

// btn.addEventListener("click",function(){
//     var li = document.createElement("li");
//     li.textContent = "new item";
//     list.appendChild(li);
// })

//4)to hide an element
// const hide = document.querySelector("#hide");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   if (hide.style.display === "none") {
//     hide.style.display = "block";
//     btn.innerHTML="hide"
   
//   }else{
//     hide.style.display = "none";
//      btn.innerHTML = "show";
    
//   }
// });

//5)//toggle class
// const box = document.querySelector("#box");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click",function(){
//     box.classList.toggle("active");
// })

//6)change image src
// const img = document.querySelector("#image");
// const btn = document.querySelector("#btn")

// btn.addEventListener("click",function(){
//     img.src = "/2.jpeg"
// })

//7)change input placeholder
// const inp = document.querySelector("#inp");
// const btn = document.querySelector("#btn")
// btn.addEventListener("click",function(){
//     inp.placeholder = "Enter your full name";
// })

//8)append btn in div
// const box = document.querySelector("#container");
// const btn = document.querySelector("#addbtn")

// btn.addEventListener("click",function(){
//     var button = document.createElement("button");
//     button.innerHTML = "click me"
//     box.appendChild(button);
// })

//9)Count the numer of clicks
// const btn = document.querySelector("#counter");
// const count = document.querySelector("#count")
// let counts = 0;
// btn.addEventListener("click",function(){
//    counts++;
//    console.log(counts)
//    count.innerHTML = ` Clicks : ${counts}`
// })

//10)change text color
// const p = document.querySelector("#p")
// const btn = document.querySelector("#btn");

// btn.addEventListener("click",function(){
//     p.style.color = "red";
// })