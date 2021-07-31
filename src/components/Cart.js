import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import CartItem from './CartItem'

export default function Cart() {
    const { cartItems } = useContext(CartContext)
    let totalPrice = 0
    const cartItemsList = cartItems.map((item)=>{
        totalPrice = totalPrice + item.productPrice*item.qty;
        return(
            <CartItem key={item.id} {...item}/>
        )
    })
    totalPrice += 40;
    const cartBillItems = cartItems.map((item)=>{
        return(
            <div className="cart-bill-content">
                <h3>{item.productName}</h3>
                <h3>{item.productPrice*item.qty}</h3>
            </div>
        )
    })
    if(cartItemsList.length !== 0){
        return (
            <div className="cart-main">
                <div className="cart-items">
                    {cartItemsList}
                </div>
                <div className ="cart-bill">
                    <div className="cart-bill-heading">
                        <h2>Product Name</h2>
                        <h2>Price</h2>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    {cartBillItems}
                    <div className="cart-bill-content">
                        <h3>Delivery</h3>
                        <h3>+40</h3>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="cart-bill-content">
                        <h3>Total Price</h3>
                        <h3>{totalPrice}</h3>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <h1 className="no-items">No items Added</h1>
        )
    }
    
}
