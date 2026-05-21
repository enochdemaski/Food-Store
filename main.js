
const btn = document.getElementById("btn")
const foodInput = document.getElementById("input")
const cart = document.getElementById("cart")
const p = document.createElement("p")

const store = ["Indomie", "Rice", "Garri", "Beans", "Banana","Turkey", "Moi-Moi"]

let isAvailable  = false


btn.addEventListener("click", ()=>{
const order = foodInput.value

 if(order == ''){
        p.textContent ='Please Enter Your Chioce Of Food.'
        cart.appendChild(p)
        cart.classList.add("error")
        foodInput.classList.add("error")
        return
        //the RETURN keyword prevents the loop from running if the ORDER field is empty
    }
    
    for(let i = 0; i < store.length; i++){
    if(store[i].toLowerCase() == order.toLowerCase()){
        isAvailable = true
        break
    }
}

    if(isAvailable){
        p.textContent = order + ' Is Available'
        cart.appendChild(p)
        cart.classList.add("accept")
        cart.classList.remove("error")
        foodInput.classList.remove("error")
    }else{
        p.textContent = order + ' Is Not Available'
        cart.appendChild(p)
        cart.classList.add("accept")
        cart.classList.remove("error")
        foodInput.classList.remove("error")
    }
})



// if(isAvailable ){
//     console.log("Available")
// }else{
//     console.log(" Not available")
// }



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