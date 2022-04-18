import start from './modules/start.js'
import getFormPerson from './modules/formPerson.js'
import readyPlane from './modules/readyPlane.js'
import getData from './servis/getTour.js'

const init = async (selectorApp, title) => {
  //async - делает функцию асинхронной, добавляем при работе с апи
  const app = document.querySelector(selectorApp)
  const data = await getData() //await - дожидается конца выполнения промиса, а потом продолжается выполнение функции.
  const { main, firstForm, h1 } = start(app, title, data) //деструктаризация объекта, то есть создаются переменные main.start() & firstForm.start()
  //main.start(app, title) - метод строки main. функция возвращает форму, заголовок и контент и вставляет ее в первую переданную переменную. это все хранится в main
  // firstForm.start(app, title) - метод старт применяется к
  firstForm.addEventListener('submit', (event) => {
    event.preventDefault() //обнуляем дефолтные параметры
    const tourData = data.find((tour) => tour.id === firstForm.tour.value)
    h1.textContent = tourData.tour //find - перебирает данные с сервера (массив дата) и когда встречает тру возвращает элемент обратно
    const forms = getFormPerson(firstForm.count.value) //функция передает значение инпута и возвращает столько форм, сколько было указано.

    firstForm.remove()

    main.append(...forms) //конкатенация массива возвращенных блоков и присоеденение их к мэйну

    readyPlane(forms, main, tourData)
  })
}

init('.app', 'Выберите тур')

//render plane
