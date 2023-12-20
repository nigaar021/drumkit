var buttonHTML;
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttonHTML = this.innerHTML;
        makesound(buttonHTML);
        buttonAnimation(buttonHTML)
    });
}
document.addEventListener("keypress", function (event){
    makesound(event.key);
    buttonAnimation(event.key)
});


function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(buttonHTML)
    }   
}

function buttonAnimation(currentkey){
    var a=document.querySelector("."+currentkey);
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed")
    },200)
}