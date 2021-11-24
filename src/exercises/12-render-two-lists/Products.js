import React, {useState, useEffect} from 'react';
import products from '../productsData';

import productsData from "../productsData"

const Products = () => {
  const [prod, setProducts] = useState( [] );

  console.log(products)

  return (
    <div className="flex">
      <div>
        <h2>All products</h2>
        {products.map(product => {
      return <p>{product.title}</p> 
       })} 
       </div>
       <div>
        <h2>Basket</h2>
        
        {/* Render only products which are in the basket */}
        {products.map(product => {
        if(product.basket === true){
      return <p>{product.title}</p>  }
     })} 
      </div>
    </div >
  )
}

export default Products