import React,{useContext} from 'react'
import { CartContext } from '../CartContext'
import Product from './Product'

export default function Home() {
    const {productList} = useContext(CartContext)
    const productListItems = productList.map((product)=>{
        return(
            <Product key={product.id} {...product}/>
        )
    })
    return (
        <div className="main">
            {productListItems}
        </div>
    )
}
