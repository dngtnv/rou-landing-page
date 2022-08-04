const toggleBtn = document.querySelector('#nav-toggle')
const overlay = document.querySelector('#popover-overlay')
const panel = document.querySelector('#popover-panel')
const slideList = document.querySelector('#slides')
const indicatorDot = [...document.querySelectorAll('#indicator')]

const slideArr = []
let isActive = false

for (var i = 0; i < slideList.children.length; i++) {
  slideArr.push(slideList.children[i])
}

const handleSlideShow = function (index, dot) {
  indicatorDot.forEach(el => el.classList.add('indicator'))
  slideArr.forEach(el => {
    el.style.display = 'none'
  })
  slideArr[index].style.display = 'list-item'
  dot.classList.remove('indicator')
  dot.classList.add('indicator-active')
}

indicatorDot.forEach(dot =>
  dot.addEventListener('click', () => {
    if (indicatorDot.indexOf(dot) === 0) {
      handleSlideShow(0, dot)
    } else if (indicatorDot.indexOf(dot) === 1) {
      handleSlideShow(1, dot)
    } else {
      handleSlideShow(2, dot)
    }
  })
)

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
