import productsData from "../productsData"

const filterProducts = (products) => {
  return products.filter((product) => product.basket)
}

const Products = () => {
  return (
    <div className="flex">
      <div>
        <h2>All products</h2>
        {productsData.map((product, i) => {
          return (
            <div key={`product-${i}`}>
              <h3>Name: {product.title}</h3>
              <h3>Price: {product.price}</h3>
            </div>
          )
        })}
      </div>

      <div>
        <h2>Basket</h2>
        {filterProducts(productsData).map((product, i) => {
          return <h3 key={`basket-${i}`}>{product.title}</h3>
        })}
      </div>
    </div >
  )
}

export default Products