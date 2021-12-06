const ListenEvents = () => {

  return (
    <div className="exercise seventh">
      <h2>Listen user events</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>Have a look at the list of elements below</li>
        <li>Please add event listener for each accordingly</li>
        <li>Add onClick event listener to button which logs "I've been clicked" to the console</li>
        <li>Add onChange event listener which logs out what the user has typed in the input field</li>
      </ul>

      <a href="https://reactjs.org/docs/handling-events.html">Documentation and examples</a>

      <div className="flex">
        <button onClick={(() => console.log("I've been clicked"))}>Click me</button>
        <input onChange={((event) => console.log(event.target.value))} placeholder="Change me" />
      </div>
    </div>
  )
}

export default ListenEvents
