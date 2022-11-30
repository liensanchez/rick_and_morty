import styled from 'styled-components'


const DivCard = styled.div`
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
const BotonCerrar = styled.button`
/*  --green: #1BFD9C;
 font-size: 15px;
 padding: 0.7em 2.7em;
 letter-spacing: 0.06em;
 position: relative;
 font-family: inherit;
 border-radius: 0.6em;
 overflow: hidden;
 transition: all 0.3s;
 line-height: 1.4em;
 border: 2px solid var(--green);
 background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
 color: var(--green);
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
 */
`

export default function Card(props) {
  return (
    <DivCard>
      <BotonCerrar  onClick={props.onClose} >X</BotonCerrar>
      <h2> {props.name} </h2>
      <img src={props.image} alt=""/> 
      <h2> {props.species} </h2>
      <h2> {props.gender} </h2>
    </DivCard>
    );
}
