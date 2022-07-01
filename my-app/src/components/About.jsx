import React from 'react'
import Item from './Item'
import Button from './Button'
import Clothers from './Clothers'

export default function About() {
  return (
    <main className="itemmmmmm">
      <Item props={Clothers(0)} />
      <p>{Clothers(0).about}</p>
      <Button />
    </main>
  )
}
