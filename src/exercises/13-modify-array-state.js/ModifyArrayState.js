import Shop from "./Shop"

const ModifyArrayState = () => {
  return (
    <div className="exercise thirteenth">
      <h2>Add an item to the basket</h2>
      <h3>Instructions: </h3>
      <ol>
        <li>Explore Shop.js</li>
        <li>When Add to basket button is clicked, that item should appear in the basket list</li>
        <li>When Remove button is clicked, that item should disappear in the basket list</li>
      </ol>

      <p>Only change Shop.js</p>

      <Shop />
    </div >
  )
}

export default ModifyArrayState