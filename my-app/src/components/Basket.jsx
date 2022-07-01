import React from 'react'
import Item from './Item'
import c from '../img/c.jpg'
import Button from './Button'
import Clothers from './Clothers'
import Remove from './Remove'

export default function Basket() {
  return (
    <main>
      <h3>КОРЗИНА</h3>
      <div className="basket__flex">
        <Item props={Clothers(0)} />
        <p>{Clothers(0).count}</p>
        <Remove />
      </div>
      <div className="basket__right">
        <p className="total">Итого: ххх</p>
        <Button />
      </div>
    </main>
  )
}
