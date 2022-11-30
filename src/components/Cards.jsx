import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   const personajes = characters.map(personaje =>  <Card
                                                         name={personaje.name}
                                                         species={personaje.species}
                                                         gender={personaje.gender}
                                                         image={personaje.image}>
                                                   </Card> )
   return(
   <div>
      {personajes}
   </div>);
}
