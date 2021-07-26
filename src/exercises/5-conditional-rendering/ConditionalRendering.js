import Character from './Character'

const ConditionalRendering = () => {
  const characters = [
    {
      name: "Meriadoc Brandybuck",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Meriadoc_Brandybuck_screenshot.jpg",
      hasBeenToMordor: false
    },
    {
      name: "Peregrin Took",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Pippinprintscreen.jpg",
      hasBeenToMordor: false
    },
    {
      name: "Frodo Baggins",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Elijah_Wood_as_Frodo_Baggins.png",
      hasBeenToMordor: false
    },
    {
      name: "Samwise Gamgee",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Sean_Astin_as_Samwise_Gamgee.png",
      hasBeenToMordor: false
    }
  ]
  return(
    <div className="exercise fifth">
      <h3>Instructions: </h3>
      <ul>
        <li>Below are rendered 4 Character components</li>
        <li>Each of these receive a character object as a prop</li>
        <li>Based on the boolean value hasBeenToMordor render text "Has been to Mordor" or "Has not been to Mordor"</li>
        <li>At the moment Character component renders both text</li>
        <li>We only need to render one of them based on hasBeenToMordor value</li>
        <li>Only make changes in Character.js</li>
      </ul>

      <a href="https://reactjs.org/docs/conditional-rendering.html">Documentation and examples</a>
      
      <div class="characters">
        <Character character={characters[0]}/>
        <Character character={characters[1]}/>
        <Character character={characters[2]}/>
        <Character character={characters[3]}/>
      </div>
    </div>
  )
}

export default ConditionalRendering