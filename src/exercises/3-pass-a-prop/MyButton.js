const MyButton = (props) => {
  
  return(
    <button style={{backgroundColor: props.backgroundColor}}>
      {props.text ? props.text : "This component has not received text prop"}
    </button>
  )
}

export default MyButton