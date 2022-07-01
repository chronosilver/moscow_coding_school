import React from 'react'
import instagram from '../img/icon/instagram.png'

export default function Footer() {
  return (
    <div className="footer">
      <a className="footer__anim" href="#">
        <img className="inst" src={instagram} alt="instagram" width="45" />
      </a>
    </div>
  )
}
