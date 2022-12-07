import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'



function App () {

  const [characters, setCharacters] = useState([]) //traemos de la base de datos un arreglo de objetos va vacio xq sino nos tira error

  const onSearch = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      //parseamos
    .then((response) => response.json())
    .then((data) => {
        //si nos da true
       if (data.name) {
            //con callback, a lo q teniamos antes, guardamos lo q esta en data
          setCharacters((oldChars) => [...oldChars, data]);

          //si no lo encuentra tira un alert
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }


    //este id viene de cards que se ejecuta en props
  const onClose = (id) => {
    setCharacters(characters.filter((chac) => chac.id !== id)) 
  }

  return (
    <>
    <Nav onSearch={onSearch}>
    </Nav>
    <div className='App' style={{ padding: '25px' }}>   
      <div>
         <Cards
          onClose={onClose}
          characters={characters}
        /> 
      </div>
    </div>
    </>

  )
}

export default App
