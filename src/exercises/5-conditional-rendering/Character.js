const Character = (props) => {

  return(
    <div className="Character">

      <h3>Name: {props.character.name}</h3>

      <img src={props.character.image} alt=""/>

      {/* Please render only one of these values based on 
      hasBeenToMordor value coming from character prop */}
      
      <p>{props.character.hasBeenToMordor ? "Has been to Mordor" : "Has not been to Mordor"}</p>
      
    </div>
  )
}

export default Character