import Character from './Character'

const UseProps = () => {
  const characters = [
    {
      name: "Meriadoc Brandybuck",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Meriadoc_Brandybuck_screenshot.jpg"
    },
    {
      name: "Peregrin Took",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Pippinprintscreen.jpg"
    },
    {
      name: "Frodo Baggins",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Elijah_Wood_as_Frodo_Baggins.png"
    },
    {
      name: "Samwise Gamgee",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Sean_Astin_as_Samwise_Gamgee.png"
    }
  ]
  return(
    <div className="exercise fourth">
      <h3>Instructions: </h3>
      <ul>
        <li>Below are rendered 4 Character components</li>
        <li>Each of these is receiving props for name and image which are defined in characters array</li>
        <li>Make changes to Character component to make use of the props passed</li>
        <li>Only make changes in Character.js</li>
      </ul>

      <a href="https://reactjs.org/docs/components-and-props.html">Documentation and examples</a>

      <div class="characters">
        <Character image={characters[0].image} name={characters[0].name}/>
        <Character image={characters[1].image} name={characters[1].name}/>
        <Character image={characters[2].image} name={characters[2].name}/>
        <Character image={characters[3].image} name={characters[3].name}/>
      </div>
    </div>
  )
}

export default UseProps