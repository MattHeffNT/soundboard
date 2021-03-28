
  
let flashback = document.querySelector('#flashback')
flashback.addEventListener('click',play)

let dialtone = document.querySelector('#dialtone')
dialtone.addEventListener('click',play)
// function checks which element called it then assigns the right sound to play

function play(e) {

    // get id of button that clicked 
    var target = e.srcElement.id

    console.log(target)

    // select right sound effect based on id then play sound

    if (target == "flashback") {
        sound = './sounds/Flashback Sound Effect.mp3';
        var audio = new Audio(sound);
        audio.play();

    } else if ( target == "dialtone") {
        sound = "./sounds/Dial Tone.mp3"
        var audio = new Audio(sound);
        audio.play();
    }

}