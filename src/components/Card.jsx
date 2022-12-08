import styled from 'styled-components'
import {Link} from "react-router-dom";


const DivCard = styled.div`
  margin-top: 45px;
  margin-right: auto;
  margin-left: auto;
  width: 350px;
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  height: 500px;
  border-radius: 5px;
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`


const BotonCerrar = styled.button`
  border: 2px solid ;
  background-color: #1BFD9C;
  display: flex;
  flex-direction: row-reverse;
 
`

export default function Card(props) {
  return (
    <DivCard>
      <ButtonContainer>
        <BotonCerrar onClick={props.onClose} >X</BotonCerrar> 
      </ButtonContainer>
    
      <Link to={`/detail/` + props.id} >
        <h2> {props.name} </h2>
      </Link>
      <img src={props.image} alt=""/> 
      <h2> {props.species} </h2>
      <h2> {props.gender} </h2>
    </DivCard>
    );
}
