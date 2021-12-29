import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header/index'

const Cart = () => {
  const cookies = Cookies.get('jwt_token')
  if (cookies === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="container">
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        className="imgSize"
        alt="cart"
      />
    </div>
  )
}

export default Cart
