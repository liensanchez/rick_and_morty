import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import { useState } from 'react'
import {BrowserRouter, Router, Link, Route} from "react-router-dom";


function App () {



  const [characters, setCharacters] = useState([]) //traemos de la base de datos un arreglo de objetos va vacio xq sino nos tira error


    //funcion de busqueda
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
    <Nav onSearch={onSearch} /> {/* VA ASI PRIMERO PORQUE ES LA RUTA FUENTE */}
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/> {/* TAMBIEN PUEDE SER ELEMENTE DEPENDDE DE LA VERSION DE REACT ROUTER DOM Q SE UTILICE */}
    </>

/*     <>
    
     <div className='App' style={{ padding: '25px' }}>   

      <div>
         <Cards
          onClose={onClose}
          characters={characters}
        /> 
      </div>
    </div> 
    </>  */
  )
}

export default App
