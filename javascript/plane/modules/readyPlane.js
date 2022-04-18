import getFormPerson from './formPerson.js'
import airplane from './airplane.js'

const readyPlane = (forms, main, tourData) => {
  const data = []
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault() //e - event
      // console.log(form.elements)

      for (const element of form.elements) {
        //все что находится в форме нахрдится в форме
        element.disabled = true //блокируем инпуты и кнопки после отправки формы
      }

      data.push({
        //пушим объект в массив
        name: form.name.value,
        ticket: form.ticket.value,
      })

      //console.log(data) посмотреть что передается в массив

      if (forms.length === data.length) {
        //когда данные заполнены
        forms.forEach((form) => form.remove()) //скрываем
        airplane(main, data, tourData) // вызываем функцию передаем место и полученные данные
      }
    })
  })
}

export default readyPlane
