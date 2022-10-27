let btn = document.querySelector('.vektor-bottom')
let modal = document.querySelector('.calendar')
let body = document.querySelector('.main')

btn.addEventListener('click', function (e) {
  modal.classList.add('open')
})

body.addEventListener('click', (event) => {
  if (event.target === body) {
    modal.classList.remove('open')
  }
})

// body.onclick = function (event) {
//   if (event.target === modal) {
//     modal.classList.remove("open");
//   }
// };

// Закрывается по щелчку на календарь
// modal.addEventListener('click', function(evt) {
//     evt.preventDefault ()
//     modal.classList.remove("open");
// });

// btn.addEventListener('click', function(evt) {
//         evt.preventDefault ()
//         modal.classList.remove("open");
//     });
