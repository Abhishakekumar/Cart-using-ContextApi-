import React,{useState} from 'react'
import Nike from './images/Nike.jpeg'
import Jordan from './images/Jordan.jpg'
import Adidas from './images/Adidas.jpg'
import Reebok from './images/Reebok.jpg'

const CartContext = React.createContext();

const CartProvider = (props) => {
    const [cartItems,setCartItems] = useState([]);
    const productList = [
        {
            id:1,
            productName:'Nike',
            productPrice:5000,
            productImg:Nike,
            qty:0
        },
        {
            id:2,
            productName:'Jordan',
            productPrice:8000,
            productImg:Jordan,
            qty:0
        },
        {
            id:3,
            productName:'Adidas',
            productPrice:6000,
            productImg:Adidas,
            qty:0
        },
        {
            id:4,
            productName:'Reebok',
            productPrice:4000,
            productImg:Reebok,
            qty:0
        }
    ] 
    const handleAddToCart = (id) => {
        const product = productList.find(p=>p.id === id);
        product.qty = 1;
        setCartItems([...cartItems,product]);
    }
    const handleAddQty = (id) =>{
        let tempCart = cartItems.map((item) => {
            if(item.id === id){
                item.qty = item.qty + 1;
            }
            return item;
        })
        setCartItems([...tempCart]);
    }
    const handleDelQty = (id) =>{
        let tempCart = cartItems.map((item) => {
            if(item.id === id && item.qty > 1){
                item.qty = item.qty - 1;
            }
            return item;
        })
        setCartItems([...tempCart]);
    }
    return (
        <CartContext.Provider value={{cartItems,setCartItems,productList,handleAddToCart,handleAddQty,handleDelQty}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider};