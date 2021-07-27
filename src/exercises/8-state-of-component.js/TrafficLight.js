const TrafficLight = () => {
  let red = false
  let yellow = false
  let green = false
  
  const darker = {filter: "brightness(50%)"}
  return(
    <div className="traffic-light">
      <div onClick={() => red = !red} className="red light" style={!red ? darker: {}}></div>
      <div onClick={() => yellow = !yellow} className="yellow light" style={!yellow ? darker: {}}></div>
      <div onClick={() => green = !green} className="green light" style={!green ? darker: {}}></div>
    </div>
  )
}

export default TrafficLight
