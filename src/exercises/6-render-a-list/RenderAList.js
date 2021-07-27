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
      hasBeenToMordor: true
    },
    {
      name: "Samwise Gamgee",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Sean_Astin_as_Samwise_Gamgee.png",
      hasBeenToMordor: true
    }
  ]
  return(
    <div className="exercise sixth">
      <h2>Render a list</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>So far we have been rendering our characters one by one</li>
        <li>Imagine you wanted to render every single Tolkien character</li>
        <li>To avoid writing Character component hundreds of times we can use JavaScript iteration methods to define and render components</li>
        <li>Please make changes to the CharactersContainer component to render all characters</li>
        <li>You are successful when four characters are displayed on the page</li>
        <li>Only make changes in CharactersContainer.js</li>
      </ul>

      <a href="https://reactjs.org/docs/lists-and-keys.html">Documentation and examples</a>

      <CharactersContainer characters={characters}/>

    </div>
  )
}

export default RenderAList