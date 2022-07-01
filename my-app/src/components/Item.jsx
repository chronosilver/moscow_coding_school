import React from 'react'

export default function Item(props) {
  const { image, name, price, about, count, size } = props.props

  return (
    <div className="item__1">
      <a href="#">
        <img src={image} className="item__img" alt="item" width="400" />
      </a>
      <p className="item__about">{name}</p>
      <p className="item__price">{price} ₽</p>
    </div>
  )
}
