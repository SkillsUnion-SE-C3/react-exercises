import Character from './Character'

const CharactersContainer = (props) => {
  return (
    <div className="flex">
      
      {/* Please refactor code below to render all characters
      in characters array */}

      <Character character={props.characters[0]}/>
      <Character character={props.characters[1]}/>
    </div>
  )
}

export default CharactersContainer