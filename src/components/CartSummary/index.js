// Write your code here

import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsList = []
      const itemPrices = cartItemsList.map(eachItem =>
        cartItemsList.push(eachItem.price * eachItem.quantity),
      )
      const totalPrice = cartItemsList.reduce(
        (accumulator, item) => accumulator + item,
      )
      const numOfItems = cartList.length

      return (
        <div className="summary-Box">
          <h1>Order Total:{totalPrice}</h1>
          <p>{numOfItems} items in cart</p>
          <button className="checkOutBtn">CheckOut</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
