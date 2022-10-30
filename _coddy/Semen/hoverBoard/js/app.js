const board = document.querySelector('#board')
const number = 1200
const colors = [
  '#4eb0ff',
  '#e04eff',
  '#4eff78',
  '#4efff9',
  '#ffba4e',
  '#ff4e6b',
]




for (let i = 0; i < number; i++) {
  const square = document.createElement('div')
  const btn = document.querySelector('#button')

  square.classList.add('square')



  
  
  


  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  square.addEventListener('click', setColor)

  board.append(square)
  btn.addEventListener('click', function pushButton() { 
  square.classList.add('transition_one')

  })
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


