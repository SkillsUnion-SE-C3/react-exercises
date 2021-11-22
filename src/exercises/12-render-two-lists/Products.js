import productsData from "../productsData"

const Products = () => {
  return (
    <div className="flex">
      <div>
        <h2>All products</h2>
        {/* Render all products here */}
      </div>

      <div>
        <h2>Basket</h2>
        {/* Render only products which are in the basket */}
      </div>
    </div >
  )
}

export default Products