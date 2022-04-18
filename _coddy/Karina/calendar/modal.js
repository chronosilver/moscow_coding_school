let bt = document.querySelector('.btnn')
let modal = document.querySelector('.modal')
let body = document.querySelector('.body')

bt.addEventListener('click', function (e) {
  //e.preventDefault()

  modal.classList.add('open')
})

body.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('open')
  }
}
