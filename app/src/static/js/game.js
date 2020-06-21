let generalChat = document.getElementById('general-chat')
let generalChatStatus = false

document.getElementById('settings-cog').addEventListener('click', function () {
    settingsLanding.style.display = 'block'
})

document.getElementById('general-chat-bar').addEventListener('click', function () {
    if (generalChatStatus) {
        generalChat.style.height = '50px'
        generalChatStatus = false
    } else {
        generalChat.style.height = '400px'
        generalChatStatus = true
    }
})

document.getElementsByClassName('player-container')[0].addEventListener('click', function () {
    alert('Looking at profiles for other players still in development!')
})

document.getElementsByClassName('player-container')[1].addEventListener('click', function () {
    alert('Looking at profiles for other players still in development!')
})

document.getElementsByClassName('player-container')[2].addEventListener('click', function () {
    alert('Looking at profiles for other players still in development!')
})

document.getElementsByClassName('player-container')[3].addEventListener('click', function () {
    alert('Looking at profiles for other players still in development!')
})

document.getElementsByClassName('player-container')[4].addEventListener('click', function () {
    profileLanding.style.display = 'flex'
})

document.getElementById('tetris').addEventListener('click', function () {
    alert('The tetris minigame is still in development!')
})
