import Character from './Character'

const CharactersContainer = (props) => {
  return (
    <div className="flex">

      {/* Please refactor code below to render all characters
      in characters array */}
      {props.characters.map((character, i) => <Character key={`character-${i}`} character={character} />)}
    </div>
  )
}

export default CharactersContainer