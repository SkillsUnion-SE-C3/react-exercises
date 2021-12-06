import { useState } from "react"

const TrafficLight = () => {

  const [red, setRed] = useState(false)
  const [yellow, setYellow] = useState(false)
  const [green, setGreen] = useState(false)

  const darker = { filter: "brightness(50%)" }
  return (
    <div className="traffic-light">
      <div onClick={() => setRed(!red)} className="red light" style={!red ? darker : {}}></div>
      <div onClick={() => setYellow(!yellow)} className="yellow light" style={!yellow ? darker : {}}></div>
      <div onClick={() => setGreen(!green)} className="green light" style={!green ? darker : {}}></div>
    </div>
  )
}

export default TrafficLight
