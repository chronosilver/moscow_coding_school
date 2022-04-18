let card = document.querySelector('.li-open')
let cardbtn = document.querySelector('.open-btn')

card.addEventListener('mouseover', () => {
  console.log('mouse')
  cardbtn.classList.add('yes')
  card.classList.add('li-open-big')
})

card.addEventListener('mouseout', () => {
  cardbtn.classList.remove('yes')
  card.classList.remove('li-open-big')
})
