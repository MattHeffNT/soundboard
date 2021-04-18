
  
let flashback = document.querySelector('#flashback')
flashback.addEventListener('click',play)

let dialtone = document.querySelector('#dialtone')
dialtone.addEventListener('click',play)

let fastforward = document.querySelector('#fastforward');
fastforward.addEventListener('click',play)

let angel = document.querySelector('#angels');
angel.addEventListener('click',play);

let moo = document.querySelector('#moo');
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

    switch (target) {

        case "flashback":
            sound = './sounds/Flashback Sound Effect.mp3';
            var audio = new Audio(sound);
            audio.play();
            break;

        case "dialtone":
            sound = "./sounds/Dial Tone.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;

        case "fastforward":
            sound = "./sounds/Fast Forward Sound Effect.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;

        case "angels":
            sound = "./sounds/angels.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;

        case "moo":
            sound = "./sounds/Moo.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;

         case "kaching":
            sound = "./sounds/Cash Register (Kaching) - Sound Effect (HD).mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
 
        case "lightning":
            sound = "./sounds/Lightning Storm Sound Effect.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
    }

}