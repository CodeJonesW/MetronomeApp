var audio = new Audio('../../../Downloads/Moreland Ave Blues.mp3');
// audio.play();

let defaultMetronomeOptions = {
    bpm: 120,
    beats: 4,
    rhythm: "noteType",
    soundType: "tap",

}


const startButton = document.getElementById("#startButton")
startButton.addEventListener("click", makeSound(1000))


function makeSound(time) {
    setInterval(audio.play, time)
}