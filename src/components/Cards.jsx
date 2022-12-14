import Card from './Card';
import styled from 'styled-components'


const DivPersonajes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 45px;
  margin-bottom: 45px;
`


export default function Cards(props) {
  const { characters } = props;
  const personajes = characters.map(personaje =>  <Card
                                                      id={personaje.id}
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
