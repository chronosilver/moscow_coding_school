import createElement from './createElement.js'
import declOfNum from './declOfNum.js'

const createCockpit = (titleText) => {
  const cockpit = createElement('div', {
    className: 'cockpit',
  })

  const title = createElement('h1', {
    className: 'cockpit-title',
    textContent: titleText,
  })

  const button = createElement('button', {
    className: 'cockpit-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  })

  cockpit.append(title, button)
  return cockpit
} //эта функция создает див, заголовок и кнопку и возвращает их.

const createExit = () => {
  const fuselage = createElement('div', {
    className: 'fuselage exit',
  })

  return fuselage
}

const createBlockSeat = (n, count) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  const fuselage = createElement('div', {
    className: 'fuselage',
  })

  for (let i = n; i < count + n; i++) {
    //i - номер ряда
    const wrapperRow = createElement('li')
    const seats = createElement('ol', {
      className: 'seats',
    })

    const seatsRow = letters.map((letter) => {
      const seat = createElement('li', {
        className: 'seat',
      })
      const wrapperCheck = createElement('label')
      const check = createElement('input', {
        name: 'seat',
        type: 'checkbox',
        value: `${i}${letter}`,
      })

      wrapperCheck.append(check)
      seat.append(wrapperCheck)
      return seat
    })

    seats.append(...seatsRow)
    wrapperRow.append(seats)
    fuselage.append(wrapperRow)
  }

  return fuselage
}

const createAirplane = (title, tourData) => {
  const scheme = tourData.scheme
  const choisesSeat = createElement('form', {
    className: 'choises-seat',
  })

  const plane = createElement('fieldset', {
    className: 'plane',
    name: 'plane',
  })

  const cockpit = createCockpit(title)
  let n = 1

  //перебираем схему самолета, map возвращает массив
  const elements = scheme.map((type) => {
    if (type === 'exit') {
      return createExit() //возвращает функцию отрисовки выходов
    }

    if (typeof type === 'number') {
      //typeof оператор возвращает тип строки
      const blockseat = createBlockSeat(n, type) //type - количество
      n = n + type //нумерация в зависимости от количества
      return blockseat
    }
  })

  plane.append(cockpit, ...elements) //... - спред оператор превращает массив в строку

  choisesSeat.append(plane)
  return choisesSeat
} //форма выбора места

const checkSeat = (form, data) => {
  form.addEventListener('change', () => {
    const formData = new FormData(form)
    const checked = [...formData].map(([, value]) => value)

    if (checked.length === data.length) {
      ;[...form].forEach((item) => {
        if (item.checked === false && item.name === 'seat') {
          item.disabled = true
        }
      })
    }
  })
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const booking = [...formData].map(([, value]) => value)

    for (let i = 0; i < data.length; i++) {
      data[i].seat = booking[i]
      console.log(data)
    }
  })
}

const airplane = (main, data, tourData) => {
  const title = `Выберите ${declOfNum(data.length, ['место', 'места', 'мест'])}`
  //const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'] //строка нужна до подключения бэка ряды и выходы. тут будет храниться схема самолета
  const choiseForm = createAirplane(title, tourData)
  checkSeat(choiseForm, data)
  main.append(choiseForm) //создаем самолет
}

export default airplane
