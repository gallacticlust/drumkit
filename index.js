//What to do when click detected

//Button Pressed

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",  function() {
        var buttonINNERHTML = this.innerHTML;
        makeSound(buttonINNERHTML);
        buttonAnimation(buttonINNERHTML);
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//Key Pressed

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("crash.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("kick-bass.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("snare.mp3");
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio("tom-2.mp3");
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio("tom-3.mp3");
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio("tom-4.mp3");
            tom7.play();
            break;
       
        default: console.log(buttonInnerHTML);
       }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}
// 
