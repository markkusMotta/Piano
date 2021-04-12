const keys = document.querySelectorAll('.key')

// clicked Key
keys.forEach((key) => {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
})

// typed Key
window.addEventListener('keydown', playNote)


function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}


function playNote(event) {
    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)

    const cantFoundAnyKey = !key
    if(cantFoundAnyKey) {
        return
    }
    
    addPlayingClass(key)

    // removePlayingClass(key)
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    
    audio.currentTime = 0.2

    audio.play()

}




function getKeyCode(event) {
    let keyCode
    const isKeyCode = event.type === 'keydown'
    if(isKeyCode) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode  
}





