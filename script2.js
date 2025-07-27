//DOM Manipulation medium qs
// 1)small to do
// const input = document.querySelector("#input");
// const addtbn = document.querySelector("#addbtn");
// const list = document.querySelector("#list");

// addtbn.addEventListener("click", function () {
//   const task = input.value;
//   console.log(task);
//   if (task != "") {
//     const li = document.createElement("li");
//     li.textContent = task;
//     list.prepend(li);

//     const delbtn = document.createElement("button");
//     delbtn.innerHTML = "Delete task"
//     delbtn.addEventListener("click", function () {
//       list.removeChild(li);

//     });
//     li.appendChild(delbtn);
//     input.value = "";
//   } else {
//     alert("Please enter a task!");
//   }
// });


//2)password hide
// const  input = document.querySelector("#inputpassword")
// const box = document.querySelector("#box")

// box.addEventListener("change",function(){
//     if(box.checked){
//         input.type = "text"
//     }else{
//         input.type = "password"
//     }
// })


//3)
// const inp = document.querySelector("#inpfile")
// const img  = document.querySelector("#imgpreview")

// inp.addEventListener("change",function(){
//     const file = inp.files[0];

//     if(file){
//         const imgurl = URL.createObjectURL(file);
//         img.src = imgurl;

//     }else{
//         img.src = ""    
//     }
// })


