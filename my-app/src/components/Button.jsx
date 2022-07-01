import React from 'react'

export default function Button() {
  function handleChange() {
    console.log('push')
  }
  return (
    <button className="Btn" id="Btn" onClick={handleChange}>
      оформить заказ
    </button>
  )
}
