// Show food menu

const store = []


//TO DISPLAY MENU-LIST
document.getElementById("menu-btnm").onclick = () =>{
    const menu = document.getElementById("menu")
    const menuhead = document.getElementById("menuhead")
    const note = document.getElementById("re")
    menu.classList.toggle("menu")
    menu.classList.add("menu-show")
    menuhead.textContent = 'food-list.'
    note.textContent = 'eat like a king.'
}
  for(let i = 0; i < store.length; i++){
        const li = document.createElement("li")
        li.textContent = i  + '. ' + store[i]
        menu.appendChild(li)
    }

// ALL BUTTONS
document.getElementById("menu-btnc").onclick = () =>{
    const foodName = document.getElementById("foodcheck")
    const title = document.getElementById("check")
    foodName.classList.toggle("hidden")
    title.textContent = "check food by name."
}

document.getElementById("menu-btnr").onclick = () =>{
    const replace = document.getElementById("replace")
    const titlee= document.getElementById("checkk")
    replace.classList.toggle("hiddenn")
    titlee.textContent = "change/replace food by index"
}
document.getElementById("menu-btna").onclick = () =>{
    const add = document.getElementById("add")
    const titleee = document.getElementById("checkkk")
    add.classList.toggle("hiddennn")
    titleee.textContent = "add food to the list"
}
 




// FIRST BUTTON CHECKS FOR FOOD AVAILABILITY
const btn = document.getElementById("btn")
const foodInput = document.getElementById("input")
const cart = document.getElementById("cart")
const p = document.createElement("p")

let isAvailable  = false


btn.addEventListener("click", ()=>{
const order = foodInput.value

 if(order == ''){
        p.textContent ='Please Enter Your Chioce Of Food.'
        cart.appendChild(p)
        cart.classList.add("error")
        foodInput.classList.add("error")
        return
        // the RETURN keyword prevents the loop from running if the ORDER field is empty
    }
    
    for(let i = 0; i < store.length; i++){
    if(store[i].toLowerCase() == order.toLowerCase()){
        isAvailable = true
        break
    }
}

    if(isAvailable){
        p.textContent = `${order}  Is Available`
        cart.appendChild(p)
        cart.classList.add("accept")
        cart.classList.remove("error")
        foodInput.classList.remove("error")
    }else{
        p.textContent = `${order}  Is Not Available`
        cart.appendChild(p)
        cart.classList.add("accept")
        cart.classList.remove("error")
        foodInput.classList.remove("error")
    }

})

   foodInput.onclick =()=>{
     foodInput.value = ''
     p.textContent = ''
    cart.classList.remove("accept")
    cart.classList.remove("error")
}

// SECOND BTN ADD FOOD TO THE LIST
const addInput = document.getElementById("add-input")
const addBtn = document.getElementById("add-btn")


addBtn.addEventListener("click", () =>{
    const li = document.createElement("li")
    const add = addInput.value
    for(let i = 0; i < 1; i++){
        store.push(add)
        li.textContent = `${i} ${store[i]}`
        menu.appendChild(li)
        addInput.value = ""
    }
    
})

const headText = document.getElementById("heading")

const type = new Typed("#heading",{
    strings: ["check for available food.", "add other food.", "replace food."],
    typeSpeed: 70,
    backSpeed: 20,
    smartBackspace: false,
    loop: true,
})








                                            // DEMO CODE

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