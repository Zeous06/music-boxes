//then how it was condense B
//how coding evolves to make if more condense and less code
// below is more concise and condense
const notes = {
  a: {
    audio: document.querySelector('.c-audio'),
    pianoKey: document.querySelector('.c-key')
  },
  d: {
    audio: document.querySelector('.d-audio'),
    pianoKey: document.querySelector('.d-key')
  },
  e: {
    audio: document.querySelector('.e-audio'),
    pianoKey: document.querySelector('.e-key')
  },
  f: {
    audio: document.querySelector('.f-audio'),
    pianoKey: document.querySelector('.f-key')
  },
  g: {
    audio: document.querySelector('.g-audio'),
    pianoKey: document.querySelector('.g-key')
  },
  h: {
    audio: document.querySelector('.a-audio'),
    pianoKey: document.querySelector('.a-key')
  },
  j: {
    audio: document.querySelector('.b-audio'),
    pianoKey: document.querySelector('.b-key')
  },
  k: {
    audio: document.querySelector('.c-audio-high'),
    pianoKey: document.querySelector('.high-c-key')
  },
}
function playNote(audioElement) {
  audioElement.currentTime = 0
  audioElement.play()
}

document.addEventListener('keydown', function(event) {
  if(notes[event.key] === undefined) return

  notes[event.key].currentTime = 0
  notes[event.key].audio.play()
  notes[event.key].pianoKey.classList.add('active')
})
document.addEventListener('keyup', function(event) {
  if(notes[event.key] === undefined) return
  //notes[event.key].pianoKey.classList.remove('active')
  playNote(notes[event.key].audio)
  notes[event.key].pianoKey.classList.remove('active')

})

for(let note in notes) {
  notes[note].pianoKey.addEventListener('click', function(event) {
    //notes[note].audio.currentTime = 0
    //notes[note].audio.play()
    playNote(notes[note].audio)
  })
}

//How started A
//below is coding Before with a lot more info
//const cAudio = document.querySelector('.c-audio')
//const dAudio = document.querySelector('.d-audio')
//const eAudio = document.querySelector('.e-audio')
//const fAudio = document.querySelector('.f-audio')
//const gAudio = document.querySelector('.g-audio')
//const aAudio = document.querySelector('.a-audio')
//const bAudio = document.querySelector('.b-audio')
//const cAudioHigh = document.querySelector('.c-audio-high')

//cAudio.addEventListener('keypress')
//textbox.addEventListener('keypress', function( {
//}) // only when using keyboard or typing

//document.addEventListener('keypress', function(event) {
//  console.log(event);
//  if(event.key == 'q') {
//    cAudio.currentTime = 0
//    cAudio.play()
//  }
//  if(event.key == 'w') {
//    dAudio.currentTime = 0
//    dAudio.play()
//  }
//  if(event.key == 'e') {
//    eAudio.currentTime = 0
//    eAudio.play()
//  }
//  if(event.key == 'r') {
//    fAudio.currentTime = 0
//    fAudio.play()
//  }
//  if(event.key == 't') {
//    gAudio.currentTime = 0
//    gAudio.play()
//  }
//  if(event.key == 'y') {
//    aAudio.currentTime = 0
//    aAudio.play()
//  }
//  if(event.key == 'u') {
//    bAudio.currentTime = 0
//    bAudio.play()
//  }
//  if(event.key == 'i') {
//    cAudioHigh.currentTime = 0
//    cAudioHigh.play()
//  }

//}) // to listen to the entire document

//cAudio.play()
