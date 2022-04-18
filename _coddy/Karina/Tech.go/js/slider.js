const slider = document.querySelector('.slider')
let isDown = false
let startX
let sLeft
slider.scrollLeft = 0

slider.addEventListener('mousedown', (e) => {
  isDown = true
  startX = e.pageX
  sLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false
})
slider.addEventListener('mouseup', () => {
  isDown = false
})

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX
  const dragged = x - startX
  slider.scrollLeft = sLeft - dragged
})
