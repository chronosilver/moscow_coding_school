import React from 'react'
import ReactDOM from 'react-dom'
import { Card, Button } from 'antd'
import 'antd/dist/antd.css'
import './index.css'

const App = () => {
  const [cartProducts, setCartProducts] = React.useState([])
  const [products, setProducts] = React.useState(getProducts())

  const handleAddProductToCart = (productID) => {
    setCartProducts([...cartProducts, productID])
  }
  const handleRemoveFromCart = (productID) => {
    const newCartProducts = cartProducts.filter((id) => id !== productID)
    setCartProducts(newCartProducts)
  }
  return (
    <>
      <div>
        <h1>Выберите товар</h1>
        {products.map((product) => {
          const { id, name, price, photo } = product
          let haveInCart = false

          cartProducts.forEach((productID) => {
            if (productID === id) {
              haveInCart = true
            }
          })

          return (
            <Card title={name} key={id}>
              <p>{price}</p>
              <p>{photo}</p>
              {!haveInCart ? (
                <Button
                  onClick={() => handleAddProductToCart(id)}
                  type="primary"
                >
                  Добавить в корзину
                </Button>
              ) : (
                <Button
                  onClick={() => handleRemoveFromCart(id)}
                  type="primary"
                  danger
                >
                  Удалить из корзины
                </Button>
              )}
            </Card>
          )
        })}
      </div>
      <div>
        <h1>Ваша корзина</h1>
        {cartProducts.length > 0
          ? cartProducts.map((productID) => {
              const productIndex = products.findIndex((product) => {
                return product.id === productID
              })
              let { name, id, price, photo } = products[productIndex]
              return (
                <Card title={name} key={id}>
                  <p>{price}</p>
                  <p>{photo}</p>
                </Card>
              )
            })
          : 'Ваша корзина пуста! :('}
      </div>
    </>
  )
}

const getProducts = () => [
  {
    id: 1.1,
    name: 'Title1',
    price: '10$',
    photo: 'img1',
  },
  {
    id: 1.2,
    name: 'Title2',
    price: '20$',
    photo: 'img2',
  },
  {
    id: 1.3,
    name: 'Title3',
    price: '30$',
    photo: 'img3',
  },
  {
    id: 1.4,
    name: 'Title4',
    price: '25$',
    photo: 'img4',
  },
]

ReactDOM.render(<App />, document.getElementById('container'))
