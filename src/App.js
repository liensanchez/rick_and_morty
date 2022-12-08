import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import { useState } from 'react'
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Detail from './components/Detail'
import Form from './components/Form'


function App () {

  const username = 'lili@gmail.com'
  const password = '1passw2'
  const navigate = useNavigate()

  const login = (user) => {
    if (user.username === username && user.password === password){
      navigate('/home')
    }
  }

  const [characters, setCharacters] = useState([]) //traemos de la base de datos un arreglo de objetos va vacio xq sino nos tira error


  const location = useLocation()


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
    {location.pathname !== '/' && <Nav onSearch={onSearch} />} {/* esto es para q no aparezca el nav en el form */}
     {/* VA ASI PRIMERO PORQUE ES LA RUTA FUENTE */}
      <Routes>  
        <Route exact path='/' element={<Form login={login} />}/>
        <Route path='/home' element={<Home onClose={onClose} characters={characters} />}/>
        <Route path='/about' element={<About />}/> {/* TAMBIEN PUEDE SER ELEMENTE DEPENDDE DE LA VERSION DE REACT ROUTER DOM Q SE UTILICE */}
        <Route path='/detail/:id' element={<Detail />}/> 
      </Routes>
    </>
  )
}

export default App
