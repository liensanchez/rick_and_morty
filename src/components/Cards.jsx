import Card from './Card';
import styled from 'styled-components'


const DivPersonajes = styled.div`
  display: flex;
`

const onClose = () => {
  window.alert('Card Cerrada')
}

export default function Cards(props) {
  const { characters } = props;
  const personajes = characters.map(personaje =>  <Card
                                                      key={personaje.id}
                                                      close ={onClose}
                                                      name={personaje.name}
                                                      species={personaje.species}
                                                      gender={personaje.gender}
                                                      image={personaje.image}>
                                                  </Card> )
  return(
    <DivPersonajes>
      {personajes}
    </DivPersonajes>);
}
