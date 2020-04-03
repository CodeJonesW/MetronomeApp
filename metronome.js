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


// Variables
const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")
const beatIconDiv = document.getElementById("beatIconDiv")
const iconElement = document.getElementById("beatIconElement")
let bpmInput
let iconCount = 1




// Metronome Event Listeners
startButton.addEventListener("click", function (event) {
    event.preventDefault()

    // set options via the html elements bpmInput and beatCountInput values
    metronomeOptions.bpm = parseInt(document.getElementById("bpmInput").value)
    metronomeOptions.beatCount = parseInt(document.getElementById("beatCountInput").value)

    // this convert function sets the beatLengthinMilliSeconds key of the metronomeOptions
    convertBpmToMilliSeconds(metronomeOptions.bpm)

    // interval determined by the metronomeOptions we set
    setInterval(function () {
        console.log(`Sound occurs every: ${metronomeOptions.beatLengthInMs}ms`)

        // conditional icon rendering based on the beatCount option
        if (iconCount <= metronomeOptions.beatCount) {
            let image = "$"
            iconElement.innerHTML = image.repeat(iconCount)
        } else {
            iconElement.innerHTML = "$"
            iconCount = 1
        }

        iconCount++
    }, metronomeOptions.beatLengthInMs)

    // disable start button while metronome is running
    startButton.disabled = true
})

stopButton.addEventListener("click", function (event) {
    // stop interval an enable the start button again
    clearInterval()
    startButton.disabled = false
})



