import { useState } from "react"
import productsData from "../productsData"

const Shop = () => {
  const [products, setProducts] = useState(productsData)

  const productsInBasket = () => {
    return products.filter((product) => product.basket)
  }

  const changeProductBasketStatus = (selectedProduct, basketStatus) => {
    const newProducts = products.map((product) => {
      if (product === selectedProduct) {
        return { ...product, basket: basketStatus }
      }
      return product
    })

    setProducts(newProducts)
  }

  return (
    <div className="flex">
      <div>
        <h2>All products</h2>
        {products.map((product, i) => {
          return (
            <div key={"product" + i}>
              <h3>Name: {product.title}</h3>
              <h3>Price: {product.price}</h3>
              <button onClick={() => changeProductBasketStatus(product, true)}>Add to basket</button>
            </div>
          )
        })}
      </div>
      <div>
        <h2>Basket</h2>
        {productsInBasket().map((product, i) => {
          return (
            <div key={"basket" + i}>
              <h3>{product.title}</h3>
              <button onClick={() => changeProductBasketStatus(product, false)}>Remove</button>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default Shop