import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'


function App () {

  const [characters, setCharacters] = useState({
    characterName : ''
  })

  const onSearch = (e) => {

    setCharacters({
      ...characters,
    })
  }



  return (
    <>
    <Nav onSearch={onSearch}>
    </Nav>
    <div className='App' style={{ padding: '25px' }}>   
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
    </>

  )
}

export default App
