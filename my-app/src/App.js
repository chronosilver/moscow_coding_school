import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import { render } from 'react-dom'
import './App.css'
import Header from './components/Header'
import Shop from './components/Shop'
import Footer from './components/Footer'
import Basket from './components/Basket'
import About from './components/About'
// import { Route } from 'react-router'

function App() {
  return (
    <>
      <Header />
      {/* <Shop /> */}
      <Basket />
      {/* <About /> */}
      <Footer />
    </>
  )
}

export default App

// {
//   /* <Shop /> */
// }
// ;<Basket />
// {
//   /* <About /> */
// }

// const root = document.querySelector('#root')
//   render(<Header /> , root)
