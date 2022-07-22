const toggleBtn = document.querySelector('#nav-toggle')
const overlay = document.querySelector('#popover-overlay')
const panel = document.querySelector('#popover-panel')

let isActive = false

const showOverlay = () => {
  overlay.classList.remove('hidden')
  overlay.classList.add('block')
}
const hideOverlay = () => {
  overlay.classList.remove('block')
  overlay.classList.add('hidden')
}

toggleBtn.addEventListener('click', () => {
  if (panel.hasAttribute('open')) {
    toggleBtn.setAttribute('aria-explanded', false)
    panel.toggleAttribute('open')
    hideOverlay()
  } else {
    toggleBtn.setAttribute('aria-explanded', true)
    panel.toggleAttribute('open')
    showOverlay()
  }
})
overlay.addEventListener('click', () => {
  toggleBtn.setAttribute('aria-explanded', false)
  panel.toggleAttribute('open')
  hideOverlay()
})
