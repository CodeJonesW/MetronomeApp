

let defaultMetronomeOptions = {
    bpm: 120,
    beats: 4,
    rhythm: "noteType",
    soundType: "tap",
}



const startButton = document.getElementById("startButton")


startButton.addEventListener("click", function (event) {
    let time = parseInt(document.getElementById("time").value)
    event.preventDefault()
    setInterval(function () { console.log(`sound every ${time}`) }, time)

})

