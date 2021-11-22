import Products from "./Products"
const RenderTwoLists = () => {
  return (
    <div className="exercise twelwth">
      <h2>Render products and items in the basket</h2>
      <h3>Instructions: </h3>
      <ol>
        <li>Explore Products.js</li>
        <li>Render products from the productsData array in two lists</li>
        <li>The first list should render all of the products</li>
        <li>The second list should render only the products which have a basket value true</li>
      </ol>

      <p>Only change Products.js</p>
      <p>The list of products have been imported into Products component</p>

      <Products />
    </div >
  )
}

export default RenderTwoLists