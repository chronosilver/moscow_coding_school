import createElement from './createElement.js'

const createTitle = (title) => {
  const h1 = createElement('h1', {
    className: 'title',
    textContent: title,
  })
  h1.className = 'title'
  h1.textContent = title

  return h1
}
// в метод передается переменная тайтл из файла скрипт и создается заголовок с контентом, передаваемом в методе init

const createMain = () => {
  const main = createElement('main', {
    className: 'person-data',
  })

  return main
}
//создается переменная мейн где с помощью импортируемой функции создается объект main с атрибутом class

const createFirstForm = (data) => {
  const form = createElement('form', {
    className: 'field',
  })
  const labelTour = createElement('label', {
    className: 'field__label',
    for: 'tour',
    textContent: 'Выбрать тур',
  })

  const select = createElement('select', {
    className: 'field__select',
    id: 'tour',
    name: 'tour',
  })

  const options = data.map((item) =>
    createElement('option', {
      value: item.id,
      textContent: item.tour,
    }),
  )

  select.append(...options)

  const label = createElement('label', {
    className: 'field__label',
    textContent: 'Укажите количество человек',
  })
  const input = createElement('input', {
    className: 'field__input',
    id: 'count',
    name: 'count',
    type: 'number',
    placeholder: '#',
    min: '1',
    max: '6',
    required: true,
  })
  const button = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  })

  form.append(labelTour, select, label, input, button) //вставляем внутрь формы с помощью метода append
  return form
}
//создается форма с объектом, в котором лежат атрибуты, инпут с атрибутами и кнопка с атрибутами.

const start = (app, title, data) => {
  const h1 = createTitle(title) //в переменной вызываем метод и передаем туда заголовок, он начинает работать
  const main = createMain() //запускаем метод
  const firstForm = createFirstForm(data)

  main.append(firstForm) // вставляем форму в main
  app.append(h1, main) // вставляем h1, main в селектор .app, который получили при вызове метода init

  return {
    main,
    firstForm,
    h1,
  }
}
// метод старт собирает все вместе, в нем вызываются функции
// он возвращает объект с переменными main & firstForm, в котором лежат форма заголовок и контент
export default start
