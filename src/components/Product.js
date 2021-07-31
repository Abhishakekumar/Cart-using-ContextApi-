import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import { useHistory } from "react-router-dom";

export default function Product(props) {
    const { handleAddToCart,cartItems } = useContext(CartContext)
    const {id,productName,productPrice,productImg} = props;
    const history = useHistory();
    const goToCart = () =>{
        let path = "/cart";
        history.push(path);
    }
    const buttonType = () => {
        let count = 0;
        cartItems.map((item)=>{
            if(item.id === id){
                count++;
            }
            return item;
        })
        if(count === 0){
            return <button className="btn" onClick={()=>handleAddToCart(id)}>Add to Cart</button>
        }
        return <button className="btn" onClick={goToCart}>Go to Cart</button>
    }
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img className="img" src={productImg} alt="Nike-Shoes"/>
                </div>
                <div className="card-content">
                    <h2 className="product-name">{productName}</h2>
                    <div className="inline-content">
                        <h3 className="product-price">Rs. {productPrice}</h3>
                        {buttonType()}
                    </div>
                </div>
            </div>
        </div>
    )
}
