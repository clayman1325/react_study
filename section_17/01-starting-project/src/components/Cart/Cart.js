import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"
import CartItem from "./CartItem"
import { useContext } from "react"
import Checkout from "./Checkout"
import { useState } from "react"

const Cart = props => {
  [isCheckout, setIsCheckout] = useState(false)
  [isSubmited, setIsSubmited] = useState(false)
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});

  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const cartItems = (
    <ul className = {classes['cart-items']}>
      {cartCtx.items.map((item) => {
        return <CartItem 
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
       />
      })
      }
    </ul>
  )
  const modalActions = (
<   div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}> Close </button>
      <button className={classes.button} onCLick={orderHandler}> Order </button> 
    </div>
  )

  const submitOrderHandler = async (userData) => {
    setIsSubmited(true)
    await fetch("url", {
    method: "post",
    body: JSON.stringify({
      user: userData,
      orderedItes: cartCtx.items
    })
    setIsSubmited(false)
  }

  return (
    <Modal onClick={props.onClose}>
      <div>
        {cartItems}
        <div className= {classes.total}>
          <span> Total Amount </span>
          <span> {totalAmount}</span>
        </div>
        { isCheckout  && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} /> }
        { !isCheckout && modalActions }
      </div>
    </Modal>
  )
}

export default Cart