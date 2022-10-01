var container=document.querySelector(".container");
var rating=0;
var clickables=document.querySelectorAll(".clickable");
var text;
var rd=document.querySelector(".ratingdisplay");
var s1=document.querySelector("#slide1");
var s2=document.querySelector("#slide2");

function toggleClicked(e){
    if(e.target.className==="num clickable"){
        clickables.forEach(function(i){
            i.classList.remove("clicked");
        })
        e.target.classList.add("clicked");
        rating=e.target.innerHTML;
        text=document.createTextNode("You selected "+rating+"  out of 5")
    }
}
var creatText=()=>{
    rd.append(text);
}
var toggleSlides=(e)=>{
    if(e.target.className==="submit"){
        s1.classList.add("disabled");
        s2.classList.remove("disabled");
        creatText();
    }
}

function UIhandler(e){
    toggleClicked(e);
    toggleSlides(e);
}

container.addEventListener("click",UIhandler);