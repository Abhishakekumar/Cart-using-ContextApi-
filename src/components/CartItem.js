import React,{useContext} from 'react'
import { CartContext } from '../CartContext';

export default function CartItem(props) {
    const {handleAddQty,handleDelQty,handleDelCartItem} = useContext(CartContext);
    const {id,productName,productPrice,productImg,qty} = props;
    const totalPrice = productPrice*qty;
    return (
        <div className="cartItem-main">
            <div className="cartItem-img">
                    <img className="img" src={productImg} alt="Nike-Shoes"/>
            </div>
            <div className="cartItem-content">
                <div className="x-container">
                <h1>{productName}</h1>
                <button onClick ={()=>handleDelCartItem(id)}>&times;</button>
                </div>
                
                <div className="cartItem-qty">
                    <h3>QTY :</h3>
                    <button className="btn" onClick={()=>handleAddQty(id)}>+</button>
                    <h4>{qty}</h4>
                    <button className="btn" onClick={()=>handleDelQty(id)}>-</button>
                </div>
                <div className="cartItem-price">
                    <h3>Price :</h3>
                    <h4>{productPrice} * {qty}</h4>
                </div>
                <br/>
                <hr/>
                <div className="cartItem-total">
                    <h3>Total Price :</h3>
                    <h4>{totalPrice}</h4>
                </div>
                

            </div>
        </div>
    )
}
