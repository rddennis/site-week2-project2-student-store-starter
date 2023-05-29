import * as React from "react"
import ProductCard from "../ProductCard/ProductCard";
import './ProductGrid.css'

export default function ProductGrid(props) {

    const products = props.products;

    return (
        <div className="product-grid">
            <div className="content">
                <div className="grid">
                    {products.map((prod, index) => {
                        return (<ProductCard
                            key = {index}
                            product={prod}
                            quantity={props.shoppingCart.find(item => item.itemId === prod.id)?.quantity}
                            handleAddItemToCart={props.handleAddItemToCart}
                            handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                            showDescription={false} />)
                    }                
                    )}
                </div> 
            </div>
        </div>
    )
}
