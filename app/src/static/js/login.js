let exUsername = 'verity'
// DONT DO THIS LMAO
let exPassword = 'yonsei2020'

let usernameInput = document.getElementById('username-input')
let passwordInput = document.getElementById('password-input')

let usernameIter = 0
let passwordIter = 0

let typingAudio = new Audio('https://www.soundjay.com/communication/computer-keyboard-2.mp3')
let clickingAudio = new Audio('https://www.soundjay.com/switch/switch-13.mp3')

function typeLogin() {
    typingAudio.play()
    typeUsername()
}

function typeUsername() {
    if (usernameIter < exUsername.length) {
        usernameInput.value += exUsername.charAt(usernameIter);
        usernameIter++;
        setTimeout(typeUsername, 75);
    } else {
        typePassword()
    }
}

function typePassword() {
    if (passwordIter < exPassword.length) {
        passwordInput.value += exPassword.charAt(passwordIter);
        passwordIter++;
        setTimeout(typePassword, 75);
    } else {
        typingAudio.pause()
        clickingAudio.play()
        setTimeout(clearLogin, 100);
    }
}

function clearLogin() {
    loginLanding.animate([
        {opacity: 1},
        {opacity: 0}
    ], {
        duration: 500,
        iterations: 1
    })
    loginLanding.style.opacity = 0
    gameLanding.style.display = 'block'
    setTimeout(function () {
        loginLanding.style.display = 'none'
        gameLanding.animate([
            {opacity: 0},
            {opacity: 1}
        ], {
            duration: 500,
            iterations: 1
        })
        gameLanding.style.opacity = 1
    }, 500)
}
