
const content = document.querySelector(".hello h1:first-child");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler ={
    handleMouseEnter: function (){
        content.innerText = "The Mouse is here!";
        content.style.color = colors[0];
      
    },
    handleMouseLeave:function (){
        content.innerText = "mouse is gone!";
        content.style.color = colors[1];
    }
    ,
    handleWindowResize:function (){
        // window를 사용하면 query 사용 불가능
        // document 내의 요소들만 사용 가능
        content.innerText = "You just resized";
        content.style.color = colors[2];
    } ,   
    handleRightClick:function(){
        content.innerText= "That was a rgiht click";
        content.style.color = colors[3];
    }
};


/*

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WiFI");
}

function handleWindowOnline(){
    alert("ALL GOOOOD~!");
}*/
content.addEventListener("mouseenter",superEventHandler.handleMouseEnter);
content.addEventListener("mouseleave",superEventHandler.handleMouseLeave);
content.addEventListener("contextmenu",superEventHandler.handleRightClick);
//방법이 두개 addEventLister 과 on~ 방식
// addEventLister를 선호
window.addEventListener("resize",superEventHandler.handleWindowResize);

//window.addEventListener("copy",handleWindowCopy);
//window.addEventListener("offline",handleWindowOffline);
//window.addEventListener("online",handleWindowOnline);