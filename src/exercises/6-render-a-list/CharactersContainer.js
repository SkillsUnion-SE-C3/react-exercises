import Character from './Character'

const CharactersContainer = (props) => {
  return (
    <div class="characters">
      
      {/* Please refactor code below to render multiple components using map */}

      <Character character={props.characters[0]}/>
      <Character character={props.characters[1]}/>
      <Character character={props.characters[2]}/>
      <Character character={props.characters[3]}/>
    </div>
  )
}

export default CharactersContainer