import React from 'react'
import label from '../img/label.png'
import shop from '../img/icon/sh.png'

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="index.html">
        <img src={label} className="logo__img" alt="logo" width="270" />
      </a>
      <a className="basket" href="basket.html">
        <img src={shop} alt="basket" width="40" />
      </a>
    </header>
  )
}
