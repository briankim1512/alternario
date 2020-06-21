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