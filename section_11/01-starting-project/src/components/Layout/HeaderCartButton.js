import { useContext, useEfect, useEffect, useState} from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
  const [btnHighlighted, setBtnHighlight] = useState(false)
  const cartCtx =  useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => { 
    return curr + item.amount;
  },0); 
  
  const { items } = cartCtx;

  const buttonClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if(cartCtx.items.length == 0) {
      return;
    }
    setBtnHighlight(true)
    const timmer = setTimeout(() => {
      setBtnHighlight(false)
    }, 300)

    return () => {
      clearTimeout(timmer)
    }
  }, [items])
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  )
}

export default HeaderCartButton;