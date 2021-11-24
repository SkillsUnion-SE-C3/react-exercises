import Character from './Character'

const CharactersContainer = (props) => {
  const charactersList = props;
  console.log(props)

  return (
    <div className="flex">
      
      {/* Please refactor code below to render all characters
      in characters array */}
      {props.characters.map((itemCharacter => {
        return      <Character character={itemCharacter}/>
    }))}
     
    </div>
  )
}

export default CharactersContainer