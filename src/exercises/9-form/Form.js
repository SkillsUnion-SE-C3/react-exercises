import Sum from "./Sum"

const Form = () => {
  
  return(
    <div className="exercise ninth">
      <h2>Update state on input change</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>Implement addition calculator</li>
        <li>On this page you can see two input fields</li>
        <li>Once the user has entered 2 numbers into the fields,
        they should see the sum of these two numbers below at the place where the word SUM is</li>
        <li>Only make changes in the Sum component</li>
      </ul>

      <Sum/>
    </div>
  )
}

export default Form
