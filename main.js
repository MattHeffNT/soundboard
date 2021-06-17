
  
let flashback = document.querySelector('#flashback')
flashback.addEventListener('click',play)

let dialtone = document.querySelector('#dialtone')
dialtone.addEventListener('click',play)

let fastforward = document.querySelector('#fastforward');
fastforward.addEventListener('click',play)

let angel = document.querySelector('#angels');
angel.addEventListener('click',play);

let moo = document.querySelector('#Moo');
moo.addEventListener('click',play);

let kaching = document.querySelector('#kaching');
kaching.addEventListener('click',play);

let lightning = document.querySelector('#lightning');
lightning.addEventListener('click',play);

// function checks which element called it then assigns the right sound to play

function play(e) {

    // get id of button that clicked 
    let target = e.srcElement.id

    e.preventDefault()
    console.log(target)

    sound = `./sounds/${target}.mp3`;
    var audio = new Audio(sound);
    audio.play();

}
