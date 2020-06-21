let mainLanding = document.getElementById('main-landing')
let loginLanding = document.getElementById('login-landing')
let settingsLanding = document.getElementById('settings-landing')
let creditsLanding = document.getElementById('credits-landing')
let gameLanding = document.getElementById('game-landing')
let profileLanding = document.getElementById('profile-landing')

document.getElementById('settings-main').addEventListener('click', function () {
    settingsLanding.style.display = 'block'
})

document.getElementById('settings-background').addEventListener('click', function () {
    settingsLanding.style.display = 'none'
})

document.getElementById('credits-main').addEventListener('click', function () {
    creditsLanding.style.display = 'block'
})

document.getElementById('credits-overlay').addEventListener('click', function () {
    creditsLanding.style.display = 'none'
})

document.getElementById('play-main').addEventListener('click', function () {
    mainLanding.getElementsByTagName('div')[0].classList.add('main-left-hide')
    mainLanding.getElementsByTagName('div')[1].classList.add('main-right-hide')
    loginLanding.style.display = 'flex'
    setTimeout(function() {
        mainLanding.style.display = 'none'
        loginLanding.style.zIndex = 1
        typeLogin()
    }, 500)
})
