let main = document.querySelector('.big')
let two = document.querySelector('.small1')
let three = document.querySelector('.small2')
let four = document.querySelector('.small3')

let bitch = main.getAttribute('src')
let moon = two.getAttribute('src')
let cat = three.getAttribute('src')
let bird = four.getAttribute('src')

let mass = [bitch, moon, cat, bird]
let name = [main, two, three, four]
//shift - вырезает элемент из начала массива
//unshift - вставляет элемент в начало
//нажимаем на луну - пляж вырезается, а она ставится в начало массива
//0 элемент массива = main
//а пляж занимаем место луны
//то есть элемент добавляется в конец массива

//
function Perebor() {
  main.setAttribute('src', mass[0])
  two.setAttribute('src', mass[1])
  three.setAttribute('src', mass[2])
  four.setAttribute('src', mass[3])
}
// main.setAttribute("src", mass[0]);
// two.setAttribute("src", mass[1]);
// three.setAttribute("src", mass[2]);
// four.setAttribute("src", mass[3]);

two.addEventListener('click', () => {
  console.log('click')
  let i = mass.shift()

  mass.push(i)
  Perebor()
})

three.addEventListener('click', () => {
  // let i = mass.shift();

  // mass.push(i);
  main.setAttribute('src', mass[2])
  two.setAttribute('src', mass[1])
  three.setAttribute('src', mass[0])
  four.setAttribute('src', mass[3])
  //нажимая на второй он становится 0
  //cat = [0]
  //three.setAttribute("src", mass[0]);
})

four.addEventListener('click', () => {
  // let i = mass.shift();

  // mass.push(i);
  // Perebor();
  main.setAttribute('src', mass[3])
  two.setAttribute('src', mass[1])
  three.setAttribute('src', mass[2])
  four.setAttribute('src', mass[0])
})

// two.addEventListener("click", () => {
//   main.setAttribute("src", mass[1]);
//   two.setAttribute("src", mass[0]);
// });

// three.addEventListener("click", () => {
//   main.setAttribute("src", mass[2]);
//   three.setAttribute("src", mass[1]);
// });

// four.addEventListener("click", () => {
//   main.setAttribute("src", mass[3]);
//   four.setAttribute("src", mass[2]);
// });
