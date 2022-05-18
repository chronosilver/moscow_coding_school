let minus = document.querySelector('#minus-btn')
let plus = document.querySelector('#plus-btn')
let area = document.querySelector('#count')
let count = 0

function Counter() {
  plus.addEventListener('click', () => {
    count++
    area.innerHTML = count
    if (count <= 0) {
      area.innerHTML = 'Add people'
    }
  })

  minus.addEventListener('click', () => {
    count--
    area.innerHTML = count
    if (count <= 0) {
      area.innerHTML = 'Add people'
    }
  })
}

Counter()
