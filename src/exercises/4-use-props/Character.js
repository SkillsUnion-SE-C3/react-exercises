const Character = (props) => {
  return (
    <div className="Character">

      <h3>Name:
        {props.name}
      </h3>
      <img src={props.image} alt="" />
    </div>
  )
}

export default Character