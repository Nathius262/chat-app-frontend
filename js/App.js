import { MessageBody } from "./component/Message.js";
import {Chat} from "./component/Chat.js";
import { Login, Signup} from "./component/Authentication.js";

// // fuction of a query selector
// function $(attribute){    
//     return (document.querySelector(attribute))
    
// }


let root = document.getElementById('root')
let i;
let is_authenticated
const endpoint = "http://127.0.0.1:8000/api/"
let options = {
    method: "GET",
    headers: {
        "Content-Type":"application/json",
    }
}

let access = localStorage.getItem('access')
let counter = 0;
function fetchMessageData(){
    
    let to_url = endpoint+"chat/"
    options.headers['Authorization'] = `BEARER ${access}`
    fetch(to_url, options)
    .then(response => {
        let jsonResonse = response.json()
        return jsonResonse
    })
    .then(data => {
        if(data.code === "token_not_valid"){
            
            if (counter < 5){
                verifyToken(access)
                fetchMessageData()
            }else{
                is_authenticated = false
                isNotAuthenticated()
                
            }
            counter +=1
            console.log(counter)
        }else{
            // Array.from(data).forEach(obj => {
            //     console.log(obj.receiver.picture);
            // })
            htmlData(data)
        }
    })
    .catch(error => {
        console.log(error);
    })
    
}

function verifyToken(token){
    console.log("verifying token...")
    let url_endpoint = endpoint+"auth/token/verify/"
    options.method = "POST"
    let data = {'token': token}
    options.body = JSON.stringify(data)
    fetch(url_endpoint, options)
    .then(response => {
        return response.json()
    }).then(data => {

        if(data.code === "token_not_valid"){
            let refresh =localStorage.getItem('refresh')
            refreshToken(refresh)
        }

    }).catch(error =>{
        console.log(error)
    })
}

function refreshToken(refresh_token){
    console.log("refreshing token...")
    let url_endpoint = endpoint+"auth/token/refresh/"
    options.method= "POST"
    let data = {'refresh': refresh_token}
    options.body = JSON.stringify(data)
    fetch(url_endpoint, options).then(response =>{
        return response.json()
    }).then(data =>{

        if(data.code === "token_not_valid"){
            console.log("please login again!");
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            is_authenticated = false
            isNotAuthenticated()
        }else if (data.access){
            console.log(data)
            localStorage['access'] = data.access
        }
        
    }).catch(error =>{
        console.log(error)
    })
}

if(localStorage.getItem('access')){
    is_authenticated =true
}else{
    is_authenticated = false
}

if (is_authenticated){
    isAuthenticated()
} else{
    isNotAuthenticated()
}

function isAuthenticated(){
    fetchMessageData()    
}

function htmlData(data){
    root.innerHTML = `${Chat(data)}`

    // eventlistener when a recent chat is clicked
    let listImg = document.getElementsByClassName('friend-item')
    for (i=0;i<listImg.length;i++){
        
        let listObj =listImg[i] 
        listImg[i].classList.remove('active')
        listObj.addEventListener("click", () =>{
            for (i of listImg) {
                i.classList.remove("active")
            }
            listObj.classList.add('active')
            document.getElementById('col2').innerHTML = MessageBody(data)
        })
    }
    dropDown()
}

function dropDown(){
    const dropdown04 = document.querySelector('#dropdown04')
    dropdown04.addEventListener("click", (e) => {
        e.preventDefault()
        let dropdown = document.querySelector('#dropdown')
        dropdown.classList.toggle("show")
        dropdown04.classList.toggle("show")
        if (dropdown04.ariaExpanded === "false"){
            dropdown04.ariaExpanded = true
        }else{
            dropdown04.ariaExpanded = false
        }
    })

    window.onclick = event => {
        if (!event.target.matches('#dropdown04')){
            let dropdown_menu =  document.getElementsByClassName('dropdown-menu')
            for (let i=0; i<dropdown_menu.length; i++){
                if (dropdown_menu[i].classList.contains('show')){
                    dropdown_menu[i].classList.remove('show')
                    dropdown04.ariaExpanded = true
                    dropdown04.classList.toggle("show")
                }
            }
        }
    }
}

function isNotAuthenticated(signup){    
    
    if(signup){
        root.innerHTML = Signup()
        let showSignupModal = document.getElementById('modalSign')
        showSignupModal.style.display = "block"
    }else{
        root.innerHTML  = Login()
        let showLoginModal = document.getElementById('modalLogin')
        showLoginModal.style.display = "block" 
    }

    // validate signup and login form before posting a request
    const authenticate = document.querySelectorAll('.needs-validation')
    Array.from(authenticate).forEach(login => {

        login.addEventListener('submit', event => {
            event.preventDefault()
            if (!login.checkValidity()){
                event.stopPropagation()
                login.classList.add('was-validated')
            }else{
                let loginForm = new FormData(login)
                let loginObj = Object.fromEntries(loginForm)
                document.querySelector('#loginForm') ? handleAuthentication(loginObj, "auth/login/") : handleAuthentication(loginObj, "auth/signup/")
            }
            
    
        })
    })

    const signupClick = document.getElementById('signupClick')
    signupClick.addEventListener('click', () => {
        isNotAuthenticated(true)
    })
    
}

function handleAuthentication(obj, url){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(obj)
    }
    let to_url = endpoint+url
    fetch(to_url, options) //promise
    .then(response => {
        return response.json()
    })
    .then(data => {
        if(data.non_field_errors){
            console.log(data.non_field_errors)
        }
        localStorage.setItem('access', data.access_token)
        localStorage.setItem('refresh', data.refresh_token)
        is_authenticated = true
        isAuthenticated()
    })
    .catch(error => {
        console.log('error', error)
    })
}