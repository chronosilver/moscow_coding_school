import createElement from './createElement.js'

const createFormPerson = (n) => {
  //n - порядковый номер
  const form = createElement('form', {
    className: 'person',
  })

  const title = createElement('h2', {
    className: 'person__title',
    textContent: `Пассажир #${n + 1}`, //интерполяция n + 1
  })
  const fieldName = createElement('div', {
    className: 'field',
  })
  const labelName = createElement('label', {
    className: 'field__label',
    for: `name${n}`,
    textContent: 'ФИО',
  })

  const inputName = createElement('input', {
    className: 'field__input',
    id: `name${n}`,
    name: 'name',
    type: 'text',
    placeholder: 'Ваше ФИО',
    required: true,
  })

  fieldName.append(labelName, inputName)
  //выше создаются форма, заголовок, див и лейбл с инпутом и вставляются в конец fieledName, получая вариатативные переменные с названиями

  const fieldTicket = createElement('div', {
    className: 'field',
  })
  const labelTicket = createElement('label', {
    className: 'field__label',
    for: `ticket${n}`,
    textContent: 'Номер билета (10 цифр)',
  })

  const inputTicket = createElement('input', {
    className: 'field__input',
    id: `ticket${n}`,
    name: 'ticket',
    type: 'text',
    placeholder: 'Номер билета',
    required: true,
    minLength: 10,
    maxLength: 10,
  })

  fieldTicket.append(labelTicket, inputTicket)

  const button = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  })

  form.append(title, fieldName, fieldTicket, button) //в форму вставляется заголовок и...
  return form
}
//создается html и возвращается

const getFormPerson = (count) => {
  const forms = []
  if (count > 6) count = 6 //проверка, больше 6 форм не должно появляться
  for (let i = 0; i < count; i++) {
    forms.push(createFormPerson(i))
  }
  return forms
}
//экспортируемая функция которая создает массив, проверяет и выполняет метод createFormPerson столько раз, чему равна переменная count
//для каждого круга создается отдельный объект и из них создается массив, который и возвращается
export default getFormPerson
