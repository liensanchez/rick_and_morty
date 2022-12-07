import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import characters, { Rick } from './data.js'






function App () {
  return (
    <>
    <Nav>
      
    </Nav>
    <div className='App' style={{ padding: '25px' }}>
      
{/*       <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        /> 
      </div> */}
      
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
