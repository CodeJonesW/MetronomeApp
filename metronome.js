// beatLengthInMs stands for beatLength in Milliseconds

let metronomeOptions = {
    bpm: 100,
    beatLengthInMs: 600,
    beatCount: 4,
    rhythm: "noteType",
    soundType: "tap",
}

function convertBpmToMilliSeconds(bpm) {
    // sets beatLengthInMs to a new value based off new bpm
    metronomeOptions.beatLengthInMs = 60000 / bpm
}



const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")


// Metronome Event Listeners
startButton.addEventListener("click", function (event) {
    event.preventDefault()

    metronomeOptions.bpm = parseInt(document.getElementById("bpmInput").value)
    metronomeOptions.beatCount = parseInt(document.getElementById("beatCountInput").value)
    convertBpmToMilliSeconds(metronomeOptions.bpm)


    setInterval(function () {
        console.log(`sound every ${metronomeOptions.beatLengthInMs}ms`)

    }, metronomeOptions.beatLengthInMs)


    startButton.disabled = true
})

stopButton.addEventListener("click", function (event) {
    clearInterval()
    startButton.disabled = false

})



