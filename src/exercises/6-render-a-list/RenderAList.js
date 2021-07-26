import Character from './Character'
import CharactersContainer from './CharactersContainer'

const RenderAList = () => {
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
    <div className="exercise sixth">
      <h3>Instructions: </h3>
      <ul>
        <li>So far we have been rendering our characters one by one</li>
        <li>Imagine you wanted to render every single Tolkien character</li>
        <li>To avoid writing Character component hundreds of times we can use JavaScript iteration methods to define and render components</li>
        <li>Please make changes to CharactersContainer component to render multiple components</li>
        <li>Only make changes in CharactersContainer.js</li>
      </ul>

      <a href="https://reactjs.org/docs/lists-and-keys.html">Documentation and examples</a>

      <CharactersContainer characters={characters}/>

    </div>
  )
}

export default RenderAList