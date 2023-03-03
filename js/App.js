import { Navbar } from "./component/Navbar.js";
import { MessageBody, MessageSubmit } from "./component/Message.js";
import {Chat} from "./component/Chat.js";
import { Login, MustAuthenticate } from "./component/Login.js";

// // fuction of a query selector
// function $(attribute){    
//     return (document.querySelector(attribute))
    
// }


let root = document.getElementById('root')
let is_authenticated = false

if (is_authenticated){
    isAuthenticated()
} else{
    isNotAuthenticated()
}

let login = document.querySelector('#loginForm')
Array.from(login).forEach(form => {
    login.addEventListener('submit', event => {
        event.preventDefault()
        let loginForm = form
        console.log(loginForm);
    })
})

function isAuthenticated(){    
    root.innerHTML = Chat()

    let navbar = document.getElementById('nav')
    navbar.innerHTML = Navbar()

    let messageBody = document.getElementById('message-body')
    messageBody.innerHTML = MessageBody()

    let messageSubmit = document.getElementById('message-submit')
    messageSubmit.innerHTML = MessageSubmit()  
}

function isNotAuthenticated(){
    root.innerHTML  = Login()
    let showModal = document.getElementById('modalLogin')
    showModal.style.display = "block"
}
