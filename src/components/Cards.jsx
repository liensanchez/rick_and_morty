import Card from './Card';
import styled from 'styled-components'


const DivPersonajes = styled.div`
  display: flex;
`


export default function Cards(props) {
  const { characters } = props;
  const personajes = characters.map(personaje =>  <Card
                                                      key={personaje.id}
                                                      //se crea y se asigna la propiedad ID cada vez q se crea una nueva card y la ejecutamos con ese id 
                                                      onClose={() => props.onClose (personaje.id)}
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
