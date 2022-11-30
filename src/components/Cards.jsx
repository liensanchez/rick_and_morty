import Card from './Card';
import styled from 'styled-components'


const DivPersonajes = styled.div`
   display: flex;
`


export default function Cards(props) {
   const { characters } = props;
   const personajes = characters.map(personaje =>  <Card
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
