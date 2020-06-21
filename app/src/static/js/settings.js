document.getElementById('brightness-range').addEventListener('change', function (event) {
    let brightnessLevel = 1 - (parseInt(event.target.value) / 100)
    document.getElementById('brightness-overlay').style.backgroundColor = "rgba(0,0,0,"+brightnessLevel+")"
})

document.getElementsByTagName('audio')[0].volume = 0.8
document.getElementById('bgm-volume-range').addEventListener('change', function (event) {
    let volumeLevel = parseInt(event.target.value) / 100
    document.getElementsByTagName('audio')[0].volume = volumeLevel
})
