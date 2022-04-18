let cart = {
  '1': {
    name: 't-shirt-black',
    count: '8',
  },
  '2': {
    name: 't-shirt-white',
    count: '8',
  },
}

const deleteFunction = (id) => {
  delete cart[id]
  renderCart()
}

const renderCart = () => {
  console.log(cart)
}

renderCart()
