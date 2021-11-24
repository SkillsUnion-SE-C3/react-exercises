const Character = (props) => {
  console.log(props)
  return(
    <div className="Character">

      <h3>Name: 
        {props.name}
        </h3>

      {/* please render image url from props instead of the hash */}
      <img src={props.image} alt=""/>

    </div>
  )
}

export default Character