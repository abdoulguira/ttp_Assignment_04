var changeText= document.querySelector(".first");
var changeText2= document.querySelector(".firs");
var changeText3= document.querySelector(".fir");

function For(){
    changeText.innerHTML="I'm right"
}

function Again(){
    changeText2.innerHTML="No I'm right"
}

changeText3.addEventListener("mouseover", event => {
    alert("Hey, I told you not to hover over me!");
  });


