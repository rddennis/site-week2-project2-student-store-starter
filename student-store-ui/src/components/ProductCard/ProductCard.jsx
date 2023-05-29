import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"


export default function ProductCard(props) {

    return ( 
        <div className="product-card">
            <div className="media">
                <Link to={"/products/" + props.product.id}>
                    <img className="product-image" src={props.product.image} alt={props.product.description}  />
                </Link>
            </div>
            
            
            <div className="description">
                <div className="left">
                    <p>{props.product.name}</p>
                </div>
                <div className="right">
                    <button className="symbols material-symbols-outlined" onClick={props.handleAddItemToCart} name="add_product" value={props.product.id}>
                        add
                    </button>
                    
                    <button className="symbols material-symbols-outlined" onClick={props.handleRemoveItemFromCart} name="remove_product" value={props.product.id}>
                        remove
                    </button>
                    
                </div>
                {props.showDescription && 
                    <div className="product-description">
                        <p>{props.product.description}</p>
                    </div>
                }

                <div className="price-quantity">
                    <div className="price">
                        <p>${props.product.price.toFixed(2)}</p>
                    </div>
                    <div className="quantity">
                        <p>{props.quantity}</p>
                    </div>
                </div>    
             </div>
        </div>
    )
}




