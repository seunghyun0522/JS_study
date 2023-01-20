
const h1 = document.querySelector("div.hello:first-child h1");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

//color 변환
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    }
    else {
        newColor= "blue";
    }
    h1.style.color=newColor;
}


h1.addEventListener("click",handleTitleClick);
