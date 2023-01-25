//const loginForm = document.getElementById("login-form");
const loginForm =document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const link= document.querySelector("a");
/* other 
const loginInput = document.querySelector("#login-form input");
const loginButton = doucment.querySelector("#login-form button");
*/

//submit 를 했을 때 원래 html 상 리셋이 되는 것을 막기 위해 preventDefault를 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
function onLoginSubmit(event){
    event.preventDefault();  //function 이고 기본 동작을 막는 행위
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
   paintGreetings(userName);
} 


function paintGreetings(username){
    greeting.innerText ="Hello " +username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

 
if(savedUserName === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    // show the greetings
    paintGreetings(savedUserName);

}