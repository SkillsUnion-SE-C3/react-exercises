import react from 'react';
import MyComponent from './MyComponent';


const RenderComponent = () => {
  return (
    <div className="exercise first">
      <h2>Render Component</h2>
      <h3>Instructions: </h3>
      <ol>
        <li>Create a component called MyComponent in this directory</li>
        <li>MyComponent should render:
          <ul>
            <li>button tag</li>
            <li>paragraph tag</li>
            <li>anchor tag</li>
            <li>ordered list</li>
            <li>textarea</li>
          </ul>
        </li>
      </ol>
      <a href="https://reactjs.org/docs/components-and-props.html">Documentation and examples</a>

      <MyComponent />
    </div>
  )
}

export default RenderComponent