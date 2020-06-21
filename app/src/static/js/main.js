let playMain = document.getElementById('play-main')
let mainLanding = document.getElementById('main-landing')
let leftMainLanding = mainLanding.getElementsByTagName('div')[0]
let rightMainLanding = mainLanding.getElementsByTagName('div')[1]

let loginLanding = document.getElementById('login-landing')

let settingsLanding = document.getElementById('settings-landing')
let settingsMain = document.getElementById('settings-main')
let settingsBackground = document.getElementById('settings-background')

let creditsLanding = document.getElementById('credits-landing')
let creditsMain = document.getElementById('credits-main')
let creditsOverlay = document.getElementById('credits-overlay')

let gameLanding = document.getElementById('game-landing')

let profileEntry = document.getElementById('profile-entry')
let profileLanding = document.getElementById('profile-landing')
let profileBackground = document.getElementById('profile-background')

settingsMain.addEventListener('click', function () {
    settingsLanding.style.display = 'block'
})

settingsBackground.addEventListener('click', function () {
    settingsLanding.style.display = 'none'
})

creditsMain.addEventListener('click', function () {
    creditsLanding.style.display = 'block'
})

creditsOverlay.addEventListener('click', function () {
    creditsLanding.style.display = 'none'
})

playMain.addEventListener('click', function () {
    leftMainLanding.classList.add('main-left-hide')
    rightMainLanding.classList.add('main-right-hide')
    loginLanding.style.display = 'block'
    setTimeout(function() {
        mainLanding.style.display = 'none'
        loginLanding.style.zIndex = 1
        typeLogin()
    }, 500)
})
