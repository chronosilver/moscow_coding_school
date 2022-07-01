import React from 'react'
import Item from './Item'
import Clothers from './Clothers'

export default function Shop() {
  return (
    <main className="main">
      <Item props={Clothers(0)} />
      <Item props={Clothers(1)} />
      <Item props={Clothers(2)} />
    </main>
  )
}
// forEach( n => { return (<Item/>)})
