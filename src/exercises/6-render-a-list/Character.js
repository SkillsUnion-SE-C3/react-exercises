const Character = (props) => {
  return(
    <div className="Character">

      <h3>Name: {props.character.name}</h3>

      <img src={props.character.image} alt=""/>
      
      <p>{props.character.hasBeenToMordor ? "Has been to Mordor" : "Has not been to Mordor"}</p>
    </div>
  )
}

export default Character