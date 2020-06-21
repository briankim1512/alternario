let mainLanding = document.getElementById('main-landing')
let loginLanding = document.getElementById('login-landing')
let settingsLanding = document.getElementById('settings-landing')
let creditsLanding = document.getElementById('credits-landing')
let gameLanding = document.getElementById('game-landing')
let profileLanding = document.getElementById('profile-landing')

function setLandingToggle (landingTarget, onToggle, offToggle, displayType='block') {
    onToggle.addEventListener('click', function () {
        landingTarget.style.display = displayType
    })
    offToggle.addEventListener('click', function () {
        landingTarget.style.display = 'none'
    })
}

setLandingToggle(
    settingsLanding,
    document.getElementById('settings-main'),
    document.getElementById('settings-background')
)

setLandingToggle(
    creditsLanding,
    document.getElementById('credits-main'),
    document.getElementById('credits-overlay')
)

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

document.addEventListener('mouseover', function(){
    document.getElementsByTagName('audio')[0].play()
});
