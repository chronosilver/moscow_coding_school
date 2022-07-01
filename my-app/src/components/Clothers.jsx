import React from 'react'
import c from '../img/c.jpg'
import puffwdown from '../img/puffwdown.jpg'
import puffdown from '../img/puffdown.jpg'

export default function Clothers(n) {
  const items = [
    {
      name: 'CREAM FLIS SWEATER',
      image: c,
      price: '2 790',
      about: 'hello',
      count: '1 шт',
    },
    {
      name: 'VINIL PUFF JACKET',
      image: puffdown,
      price: '11 000',
      about: ` <p className="main__about">
      Температура: До - 25°C
      <br />
      Наполнитель: Холлофайбер пафс
        </p>`,
    },
    {
      name: 'VINIL PUFF JACKET',
      image: puffwdown,
      price: '11 000',
      about: ` <p className="main__about">
      Температура: До - 25°C
      <br />
      Наполнитель: Холлофайбер пафс
        </p>`,
    },
  ]

  return items[n]
}
