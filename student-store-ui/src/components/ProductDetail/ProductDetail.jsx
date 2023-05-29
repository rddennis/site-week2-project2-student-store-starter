import * as React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import ProductView from "../ProductView/ProductView";


export default function ProductDetail(props) {

    const [product, setProduct] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const params = useParams()

    console.log(params.productId);

    const fetchData = async () => {
        console.log("Calling fetchData....");
        try {
          const resData = await axios.get(`https://codepath-store-api.herokuapp.com/store/${params.productId}`);
          let prod = resData.data.product;
          console.log("Data fetched successfully.");
          setProduct(prod);
        } catch (err) {
          console.log(`Error: ${err}`);
          setError("There was an error obtaining product data from the API.")
        }
        setIsFetching(false);
      }
    
      // obtains content, then confirms that the App component has mounted
      useEffect (() => {
        fetchData();
      }, [])



      if (isFetching) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )

      } else {
        return (
            <ProductView 
                product={product}
                productId={params.productId}
                quantity={props.quantity}
                handleAddItemToCart={props.handleAddItemToCart}
                handleRemoveItemFromCart={props.handleRemoveItemFromCart}
            />
        )
      }


}




