// setTimout

console.log("start")

// setTimeout(()=>{
//     console.log("runs after 2 seconds")
// },2000)

// console.log("end")

// setTimeout(()=>{
//     console.log("runs after 2 seconds incase")
// },2000)


// setInterval(()=>{
//     console.log("every 1 second")
// },1000)


// let count = 0
// const interval1 = setInterval(()=>{
//     count++
//     console.log("count",count)
//     if(count==5){
//         clearInterval(interval1)
//     }
// },5000)

// Practice Questions
// setTimout

// 1)
// console.log("one")
// setTimeout(()=>{
//     console.log("two")
// },1000)
// console.log("three")

//2)
// setTimeout(()=>{
//     console.log("welcome")
// },3000)


// 3)
// const time = setTimeout(()=>{
//     console.log("this will neer show up")
// },1000)

// clearTimeout(time)

// 4)
// function showmessage(){
//     console.log("some message1")
// }

// setTimeout(()=>{
//     showmessage()
// },5000)

// 5)
// let x = 5;
// setTimeout(()=>{
//     x=x+10
//     console.log(x)
// },0)

// console.log(x)

//setInterval
// 1)
// setInterval(()=>{
//     console.log("repeating")
// },2000)

//2)
// let count = 0;
// const inter = setInterval(()=>{
//     count++
//     console.log("repeating",count)
//     if(count==3){
//         clearInterval(inter)
//     }
    
// },1000)

// 3)
let count = 10
const inter = setInterval(()=>{
    console.log(count)
    count--
    if(count==-1){
        clearInterval(inter)
    }
},1000)