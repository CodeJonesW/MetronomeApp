

let defaultMetronomeOptions = {
    bpm: 120,
    beats: 4,
    rhythm: "noteType",
    soundType: "tap",
}



const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")

startButton.addEventListener("click", function (event) {
    let time = parseInt(document.getElementById("time").value)
    event.preventDefault()
    setInterval(function () { console.log(`sound every ${time}`) }, time)
    // startButton.disabled = true
    // stopButton.disabled = false

    stopButton.addEventListener("click", function (event) {
        clearInterval()
        // startButton.disabled = false
        // stopButton.disabled = true

    })
})



