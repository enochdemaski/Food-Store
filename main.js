
// const btn = document.getElementById("btn")
// const order = document.getElementById("input")
// const cart = document.getElementById("cart")
// const p = document.createElement("p")

const prompt = require("prompt-sync")()

const store = ["Indomie", "Rice", "Garri", "Beans", "Banana","Turkey", "Moi-Moi"]

const order = prompt("enter: ")

let isAvailable  = false


for(let i = 0; i < store.length; i++){
    if(store[i] == order){
        isAvailable == true
        break
    }
}

if(isAvailable ){
    console.log("Available")
}else{
    console.log(" Not available")
}





// btn.addEventListener("click", () =>{

// if(isAvailable){
//     cart.textContent = "Please Enter Your Food"
//     // cart.appendChild(p)
// }



// })







































// const prompt = require("prompt-sync")()

// const store = ["Indomie", "Rice", "Garri", "Beans", 
//             "Banana","Turkey", "Moi-Moi"]

// let isAvailable = false

// let order = prompt("Please What Do You Need: ")

// for(let i = 0; i < store.length; i++){
//     if(store[i] === order){
//                 isAvailable = true
//                 break;
//     }
// }
// if(isAvailable === true){
//     console.log(`${order}, is available`)
// }else{
//     console.log(`Sorry, ${order}, is not available for now.`)
// }

// if(store.includes(order)){
//     console.log(`${order}, is available`)
// }else{
//     console.log(`Sorry, ${order}, is not available for now.`)
// }