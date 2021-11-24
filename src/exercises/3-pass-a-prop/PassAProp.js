import MyButton from "./MyButton"

const PassAProp = (props) => {
  
  return(
    <div className="exercise third">
      <h2>Pass props</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>Below are rendered 3 MyButton components</li>
        <li>MyButton component expects to receive a prop for color and text</li>
        <li>By default the colour of the button is gray and text is "This component has not received text prop"</li>
        <li>If you pass the props correctly you should see the buttons using the colour and text you passed</li>
        <li>Please don't make changes to MyButton.js</li>
      </ul>

      <a href="https://reactjs.org/docs/components-and-props.html">Documentation and examples</a>
      <p> Add props to these components</p>
      <MyButton text="Passed" backgroundColor="lightgreen"/>
      <MyButton text="Passed again" backgroundColor="green"/>
      <MyButton text="One more" backgroundColor="darkgreen"/>


    </div>
  )
}

export default PassAProp