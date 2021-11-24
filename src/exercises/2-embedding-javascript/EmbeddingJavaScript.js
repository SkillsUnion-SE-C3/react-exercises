const EmbeddingJavascript = () => {
  function capitalizeName(user) { 
    let name = user.firstName[0].toUpperCase() + user.firstName.substring(1);
    let surname = user.surname[0].toUpperCase() + user.surname.substring(1);

    return name + " " + surname;
   // let capiName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
   
  }


  const user = {
    firstName: "linda",
    surname: "spruce",
    image: 'https://picsum.photos/200/300'
  }



  return (
    <div className="exercise second">
      <h2>Embed JavaScript in JSX</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>Using the user object please render user's full name below</li>
        <li>The first letters of first and surnames should be capitalized</li>
        <li>Please don't modify the user object</li>
        <li>Please render img element with src pointing to user's image property</li>
      </ul>

      <a href="https://reactjs.org/docs/introducing-jsx.html">Documentation and examples</a>


      <h2>Please render user full name below </h2>
      <p>{capitalizeName(user)}</p>
      <h2>Please render user image below </h2>
      <img src={user.image}></img>


    </div>
  )
}

export default EmbeddingJavascript