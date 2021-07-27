import TrafficLight from "./TrafficLight"

const StateOfComponent = () => {
  
  return(
    <div className="exercise eigth">
      <h2>State</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>Explore the TrafficLight component</li>
        <li>You will find 3 variables with boolean values based on which we darken or lighten the element </li>
        <li>When a light is clicked then the appropriate variable value changes but we don't see a light getting brighter</li>
        <li>Please use useState hook to trigger the change in the DOM as well</li>
        <li>You are successful when clicking on a light makes it brighter and clicking on it again makes it darker.</li>
        <li>Only make the changes in TrafficLight component</li>
      </ul>

      <a href="https://reactjs.org/docs/state-and-lifecycle.html">React state explanation</a><br/>
      <a href="https://reactjs.org/docs/hooks-state.html">React useState explanation</a>
    
      <TrafficLight/>
    </div>
  )
}

export default StateOfComponent
