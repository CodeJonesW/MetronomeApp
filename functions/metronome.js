// beatLengthInMs stands for beatLength in Milliseconds


// Current notes to self
// clap audio sample is to long. go get a click

let metronomeOptions = {
    bpm: 100,
    beatLengthInMs: 600,
    beatCount: 4,
    rhythm: "noteType",
    soundType: "clap",
}

function convertBpmToMilliSeconds(bpm) {
    // sets beatLengthInMs to a new value based off new bpm
    metronomeOptions.beatLengthInMs = 60000 / bpm
}


// Html Element Variables
const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")
const beatIconDiv = document.getElementById("beatIconDiv")
const iconElement = document.getElementById("beatIconElement")

// Programming Variables
let iconCount = 1

// Sound Variables
const sound = document.getElementById("sound")




// Metronome Event Listeners
// START BUTTON
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
        sound.play()
        // conditional icon rendering based on the beatCount option
        if (iconCount <= metronomeOptions.beatCount) {
            let image = ` <span class="dot"></span>`
            iconElement.innerHTML = image.repeat(iconCount)
        } else {
            iconElement.innerHTML = `<span class="dot"></span>`
            iconCount = 1
        }

        iconCount++
    }, metronomeOptions.beatLengthInMs)

    // disable start button while metronome is running
    startButton.disabled = true
})



// STOP BUTTON
stopButton.addEventListener("click", function (event) {
    // stop interval an enable the start button again
    clearInterval()
    startButton.disabled = false
})







