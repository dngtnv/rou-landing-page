import './style.css'

const toggleBtn = document.querySelector('#nav-toggle')
const overlay = document.querySelector('#popover-overlay')
const panel = document.querySelector('#popover-panel')

let isActive = false

toggleBtn.addEventListener('click', () => {
  isActive = !isActive
  if (isActive) {
    overlay.classList.remove('animate-fadeout')
    panel.classList.remove('animate-fadeout')
    overlay.classList.add('animate-fadein')
    panel.classList.add('animate-fadein')
  } else {
    overlay.classList.remove('animate-fadein')
    panel.classList.remove('animate-fadein')
    overlay.classList.add('animate-fadeout')
    panel.classList.add('animate-fadeout')
  }
})
overlay.addEventListener('click', () => {
  isActive = !isActive
  overlay.classList.remove('animate-fadein')
  panel.classList.remove('animate-fadein')
  overlay.classList.add('animate-fadeout')
  panel.classList.add('animate-fadeout')
})
