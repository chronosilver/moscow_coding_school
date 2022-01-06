const board = document.querySelector('#board')
const SQUARES_NUMBER = 400
const colors = [
  '#4eb0ff',
  '#e04eff',
  '#4eff78',
  '#4efff9',
  '#ffba4e',
  '#ff4e6b',
]

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#171717'
  element.style.boxShadow = `0 0 2px #171717`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
