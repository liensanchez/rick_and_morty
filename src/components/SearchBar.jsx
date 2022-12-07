import styled from 'styled-components'

const InputContainer= styled.div`
   display: flex;
   flex-direction: row-reverse;
   background-color: #1BFD9C;
   position:fixed;
   width:100%;
   z-index: 1;
`

export default function SearchBar(props) {
   return (
      <InputContainer>
         <button  onClick={props.onSearch} >Agregar</button> 
         <input type='search' />
      </InputContainer>
   );
}
